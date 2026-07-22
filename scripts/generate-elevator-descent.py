"""Render a short isometric elevator descent animation.

The renderer is deliberately self-contained: Pillow and NumPy are the only
Python dependencies, and FFmpeg performs the final video encoding.
"""

from __future__ import annotations

import argparse
import math
import subprocess
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


FPS = 30
DURATION_SECONDS = 1.6
FRAME_COUNT = round(FPS * DURATION_SECONDS)
OUTPUT_WIDTH = 1200
OUTPUT_HEIGHT = 800
SUPERSAMPLE = 2


def clamp(value: float, low: float = 0.0, high: float = 255.0) -> int:
    return int(max(low, min(high, round(value))))


def shade(color: tuple[int, int, int], factor: float) -> tuple[int, int, int, int]:
    return tuple(clamp(channel * factor) for channel in color) + (255,)


def rgba(color: tuple[int, ...], alpha: int = 255) -> tuple[int, int, int, int]:
    if len(color) == 4:
        return color  # type: ignore[return-value]
    return color + (alpha,)  # type: ignore[return-value]


def ease_in_out_cubic(t: float) -> float:
    if t < 0.5:
        return 4.0 * t * t * t
    return 1.0 - ((-2.0 * t + 2.0) ** 3) / 2.0


@dataclass
class Camera:
    position: np.ndarray
    target: np.ndarray
    width: int
    height: int
    scale: float
    frame_center: tuple[float, float]

    def __post_init__(self) -> None:
        world_up = np.array([0.0, 0.0, 1.0])
        self.forward = self.target - self.position
        self.forward /= np.linalg.norm(self.forward)
        self.right = np.cross(self.forward, world_up)
        self.right /= np.linalg.norm(self.right)
        self.up = np.cross(self.right, self.forward)
        self.up /= np.linalg.norm(self.up)

    def project(self, point: tuple[float, float, float] | np.ndarray) -> tuple[float, float, float]:
        relative = np.asarray(point, dtype=float) - self.target
        screen_x = self.frame_center[0] + float(np.dot(relative, self.right)) * self.scale
        screen_y = self.frame_center[1] - float(np.dot(relative, self.up)) * self.scale
        depth = float(np.dot(np.asarray(point, dtype=float) - self.position, self.forward))
        return screen_x, screen_y, depth


class Scene:
    def __init__(self, camera: Camera, image: Image.Image):
        self.camera = camera
        self.image = image
        self.items: list[tuple[float, str, object]] = []

    def polygon(
        self,
        points: list[tuple[float, float, float]],
        fill: tuple[int, ...],
        outline: tuple[int, ...] | None = None,
        width: int = 1,
    ) -> None:
        projected = [self.camera.project(point) for point in points]
        depth = sum(point[2] for point in projected) / len(projected)
        payload = ([point[:2] for point in projected], rgba(fill), rgba(outline) if outline else None, width)
        self.items.append((depth, "polygon", payload))

    def line(
        self,
        points: list[tuple[float, float, float]],
        fill: tuple[int, ...],
        width: int,
        depth_bias: float = -0.03,
    ) -> None:
        projected = [self.camera.project(point) for point in points]
        depth = sum(point[2] for point in projected) / len(projected) + depth_bias
        payload = ([point[:2] for point in projected], rgba(fill), width)
        self.items.append((depth, "line", payload))

    def ellipse_2d(
        self,
        center: tuple[float, float, float],
        radius: float,
        fill: tuple[int, ...],
        outline: tuple[int, ...] | None = None,
        width: int = 1,
        depth_bias: float = -0.04,
    ) -> None:
        cx, cy, depth = self.camera.project(center)
        rr = radius * self.camera.scale
        payload = ((cx - rr, cy - rr, cx + rr, cy + rr), rgba(fill), rgba(outline) if outline else None, width)
        self.items.append((depth + depth_bias, "ellipse", payload))

    def render(self) -> None:
        draw = ImageDraw.Draw(self.image, "RGBA")
        for _, kind, payload in sorted(self.items, key=lambda item: item[0], reverse=True):
            if kind == "polygon":
                points, fill, outline, width = payload  # type: ignore[misc]
                draw.polygon(points, fill=fill)
                if outline:
                    draw.line(points + [points[0]], fill=outline, width=width, joint="curve")
            elif kind == "line":
                points, fill, width = payload  # type: ignore[misc]
                draw.line(points, fill=fill, width=width, joint="curve")
            else:
                bounds, fill, outline, width = payload  # type: ignore[misc]
                draw.ellipse(bounds, fill=fill, outline=outline, width=width)


def add_box(
    scene: Scene,
    center: tuple[float, float, float],
    size: tuple[float, float, float],
    color: tuple[int, int, int],
    edge: tuple[int, int, int, int] = (42, 54, 61, 90),
    edge_width: int = 1,
) -> None:
    cx, cy, cz = center
    sx, sy, sz = (dimension / 2.0 for dimension in size)
    vertices = [
        (cx - sx, cy - sy, cz - sz),
        (cx + sx, cy - sy, cz - sz),
        (cx + sx, cy + sy, cz - sz),
        (cx - sx, cy + sy, cz - sz),
        (cx - sx, cy - sy, cz + sz),
        (cx + sx, cy - sy, cz + sz),
        (cx + sx, cy + sy, cz + sz),
        (cx - sx, cy + sy, cz + sz),
    ]
    faces = [
        ((0, 1, 2, 3), (0.0, 0.0, -1.0)),
        ((4, 7, 6, 5), (0.0, 0.0, 1.0)),
        ((0, 4, 5, 1), (0.0, -1.0, 0.0)),
        ((1, 5, 6, 2), (1.0, 0.0, 0.0)),
        ((2, 6, 7, 3), (0.0, 1.0, 0.0)),
        ((3, 7, 4, 0), (-1.0, 0.0, 0.0)),
    ]
    light = np.array([-0.45, -0.62, 0.64])
    light /= np.linalg.norm(light)
    for indices, normal in faces:
        normal_vector = np.asarray(normal)
        factor = 0.72 + 0.30 * max(0.0, float(np.dot(normal_vector, light)))
        scene.polygon([vertices[index] for index in indices], shade(color, factor), edge, edge_width)


def add_cylinder_y(
    scene: Scene,
    center: tuple[float, float, float],
    radius: float,
    depth: float,
    color: tuple[int, int, int],
    segments: int = 40,
) -> None:
    cx, cy, cz = center
    front_y = cy - depth / 2
    back_y = cy + depth / 2
    front: list[tuple[float, float, float]] = []
    back: list[tuple[float, float, float]] = []
    for index in range(segments):
        angle = 2.0 * math.pi * index / segments
        x = cx + math.cos(angle) * radius
        z = cz + math.sin(angle) * radius
        front.append((x, front_y, z))
        back.append((x, back_y, z))
    for index in range(segments):
        next_index = (index + 1) % segments
        angle = 2.0 * math.pi * (index + 0.5) / segments
        factor = 0.69 + 0.27 * max(0.0, math.cos(angle + 0.65))
        scene.polygon(
            [front[index], front[next_index], back[next_index], back[index]],
            shade(color, factor),
            (80, 69, 13, 80),
            1,
        )
    scene.polygon(back, shade(color, 0.78), (93, 75, 5, 120), 2)
    scene.polygon(front, shade(color, 1.0), (104, 81, 4, 180), 2)


def add_rail(scene: Scene, x: float, y: float, z0: float = 0.0, z1: float = 12.6) -> None:
    add_box(scene, (x, y, (z0 + z1) / 2), (0.18, 0.24, z1 - z0), (37, 42, 45), (11, 15, 17, 190), 2)
    scene.line([(x - 0.055, y - 0.13, z0), (x - 0.055, y - 0.13, z1)], (117, 126, 130, 130), 2)


def add_wall_panels(scene: Scene) -> None:
    # Back and left wall form a cutaway shaft, leaving the car fully visible.
    add_box(scene, (0.1, 4.55, 6.4), (11.5, 0.22, 13.4), (226, 230, 232), (184, 190, 194, 100), 1)
    add_box(scene, (-5.5, 0.2, 6.4), (0.22, 8.9, 13.4), (213, 219, 222), (170, 179, 184, 110), 1)
    add_box(scene, (-5.22, -3.7, 6.5), (0.25, 0.38, 13.0), (7, 88, 151), (4, 51, 91, 170), 2)

    # Recess lines keep the white shaft from looking flat.
    for z in (2.2, 5.2, 8.2, 11.2):
        scene.line([(-5.35, 4.41, z), (5.65, 4.41, z)], (187, 194, 198, 90), 2)
    for x in (-3.5, 3.5):
        scene.line([(x, 4.40, 0.0), (x, 4.40, 13.1)], (193, 199, 202, 80), 2)

    # Upper structural ledges and beams.
    add_box(scene, (0.0, 0.2, 11.92), (10.6, 0.55, 0.52), (139, 149, 155), (74, 84, 90, 130), 2)
    add_box(scene, (0.0, 1.8, 11.78), (10.6, 0.42, 0.40), (167, 174, 178), (91, 100, 105, 120), 2)
    add_box(scene, (-4.1, 0.2, 11.36), (0.95, 2.7, 0.42), (209, 213, 215), (136, 142, 145, 100), 1)
    add_box(scene, (4.1, 0.2, 11.36), (0.95, 2.7, 0.42), (209, 213, 215), (136, 142, 145, 100), 1)


def add_machine(scene: Scene, wheel_rotation: float) -> None:
    blue = (18, 100, 174)
    blue_dark = (12, 66, 122)
    yellow = (243, 180, 4)

    add_box(scene, (-0.35, 0.38, 12.52), (3.55, 1.75, 1.25), blue, (6, 51, 93, 170), 2)
    add_box(scene, (-1.55, 0.38, 13.35), (1.25, 1.45, 0.62), blue_dark, (6, 48, 86, 160), 2)
    add_box(scene, (1.18, 0.32, 13.18), (0.85, 1.2, 0.72), (62, 73, 79), (20, 25, 28, 180), 2)
    add_cylinder_y(scene, (0.0, -0.66, 12.84), 1.45, 0.55, yellow)
    add_cylinder_y(scene, (0.0, -0.99, 12.84), 0.74, 0.14, (226, 159, 0), 36)
    add_cylinder_y(scene, (0.0, -1.08, 12.84), 0.35, 0.10, (244, 187, 22), 30)

    # Ring bolts and grooves on the traction sheave.
    for angle in np.linspace(0, 2 * math.pi, 12, endpoint=False):
        angle += wheel_rotation
        scene.ellipse_2d(
            (math.cos(angle) * 1.02, -1.18, 12.84 + math.sin(angle) * 1.02),
            0.055,
            (119, 87, 4, 220),
        )
    for radius in (1.16, 1.28, 1.36):
        points = []
        for angle in np.linspace(0, 2 * math.pi, 60):
            points.append((math.cos(angle) * radius, -1.19, 12.84 + math.sin(angle) * radius))
        scene.line(points, (126, 91, 3, 155), 2)


def add_cables(scene: Scene, car_z: float) -> None:
    cable_top = 12.84
    roof = car_z + 2.12
    for x in (-0.78, -0.59, 0.59, 0.78):
        scene.line([(x, -0.88, cable_top), (x, -0.88, roof)], (73, 79, 82, 230), 3)
        scene.line([(x + 0.025, -0.91, cable_top), (x + 0.025, -0.91, roof)], (197, 202, 203, 145), 1, -0.05)


def add_cabin(scene: Scene, car_z: float) -> None:
    steel = (155, 166, 171)
    steel_light = (191, 200, 203)
    steel_dark = (105, 117, 122)
    yellow = (245, 181, 3)

    add_box(scene, (0.0, 0.25, car_z), (4.65, 3.55, 3.85), steel, (54, 66, 72, 130), 2)
    add_box(scene, (0.0, 0.24, car_z + 2.02), (4.82, 3.72, 0.24), steel_dark, (47, 57, 62, 150), 2)

    # Front doors and center seam.
    scene.polygon(
        [(-2.11, -1.535, car_z - 1.70), (-0.04, -1.535, car_z - 1.70), (-0.04, -1.535, car_z + 1.67), (-2.11, -1.535, car_z + 1.67)],
        (170, 180, 184, 255),
        (89, 100, 105, 150),
        2,
    )
    scene.polygon(
        [(0.04, -1.54, car_z - 1.70), (2.11, -1.54, car_z - 1.70), (2.11, -1.54, car_z + 1.67), (0.04, -1.54, car_z + 1.67)],
        (150, 162, 167, 255),
        (78, 91, 97, 150),
        2,
    )
    scene.line([(0.0, -1.56, car_z - 1.68), (0.0, -1.56, car_z + 1.67)], (54, 65, 70, 220), 3)

    # Pressed metal ribs on side and door panels.
    for x in (-1.72, -1.25, -0.76, 0.76, 1.25, 1.72):
        scene.line([(x, -1.57, car_z - 1.55), (x, -1.57, car_z + 1.52)], (218, 224, 226, 110), 2)
    for y in (-1.05, -0.42, 0.22, 0.85, 1.48):
        scene.line([(2.34, y, car_z - 1.55), (2.34, y, car_z + 1.55)], (213, 219, 221, 100), 2)

    # Blue inspection/control box, echoing the reference palette.
    add_box(scene, (1.72, -1.75, car_z + 1.42), (0.76, 0.30, 0.42), (17, 104, 179), (5, 56, 99, 180), 2)
    scene.ellipse_2d((1.72, -1.95, car_z + 1.42), 0.10, (111, 190, 225, 255), (2, 48, 83, 180), 1)

    # Roof equipment rails.
    for x in (-1.55, 0.0, 1.55):
        add_box(scene, (x, 0.26, car_z + 2.22), (0.16, 3.18, 0.18), steel_light, (74, 85, 90, 110), 1)

    # Yellow safety railing: posts, two rails, and corner continuity.
    z_base = car_z + 2.16
    z_mid = car_z + 2.90
    z_top = car_z + 3.53
    x_left, x_right = -2.12, 2.12
    y_front, y_back = -1.48, 1.52
    for x, y in ((x_left, y_front), (x_right, y_front), (x_left, y_back), (x_right, y_back), (0.0, y_front), (0.0, y_back)):
        scene.line([(x, y, z_base), (x, y, z_top)], yellow + (255,), 8)
    for z in (z_mid, z_top):
        scene.line([(x_left, y_front, z), (x_right, y_front, z)], yellow + (255,), 8)
        scene.line([(x_left, y_back, z), (x_right, y_back, z)], yellow + (255,), 8)
        scene.line([(x_left, y_front, z), (x_left, y_back, z)], yellow + (255,), 8)
        scene.line([(x_right, y_front, z), (x_right, y_back, z)], yellow + (255,), 8)


def create_background(width: int, height: int) -> Image.Image:
    y = np.linspace(0.0, 1.0, height)[:, None, None]
    top = np.array([242.0, 244.0, 245.0])[None, None, :]
    bottom = np.array([210.0, 217.0, 221.0])[None, None, :]
    gradient = top * (1.0 - y) + bottom * y
    gradient = np.repeat(gradient, width, axis=1)
    image = Image.fromarray(np.uint8(np.clip(gradient, 0, 255)), "RGB").convert("RGBA")

    # Broad vignette helps the silver cabin read against the pale shaft.
    vignette = Image.new("L", (width, height), 0)
    vignette_draw = ImageDraw.Draw(vignette)
    margin_x, margin_y = int(width * 0.04), int(height * 0.02)
    vignette_draw.ellipse((margin_x, margin_y, width - margin_x, height * 1.22), fill=90)
    vignette = vignette.filter(ImageFilter.GaussianBlur(width // 9))
    dark = Image.new("RGBA", (width, height), (25, 37, 45, 0))
    inverted = Image.eval(vignette, lambda value: 42 - int(value * 0.42))
    dark.putalpha(inverted)
    return Image.alpha_composite(image, dark)


def render_frame(frame_index: int, frames_dir: Path) -> Path:
    width = OUTPUT_WIDTH * SUPERSAMPLE
    height = OUTPUT_HEIGHT * SUPERSAMPLE
    image = create_background(width, height)
    camera = Camera(
        position=np.array([10.5, -14.5, 15.2]),
        target=np.array([0.0, 0.2, 6.6]),
        width=width,
        height=height,
        scale=64.0 * SUPERSAMPLE,
        frame_center=(width * 0.515, height * 0.54),
    )
    scene = Scene(camera, image)

    travel_t = ease_in_out_cubic(frame_index / (FRAME_COUNT - 1))
    car_z = 7.1 + (3.75 - 7.1) * travel_t

    add_wall_panels(scene)
    # The asymmetric world positions produce visually balanced outer guide rails
    # at this top-right camera angle without projecting through the cabin.
    add_rail(scene, -3.55, 0.15)
    add_rail(scene, 2.58, 2.72)
    add_machine(scene, wheel_rotation=-travel_t * math.pi * 1.35)
    add_cables(scene, car_z)
    add_cabin(scene, car_z)
    scene.render()

    # Subtle cinematic finishing: highlight from upper-left and a restrained vignette.
    light_layer = Image.new("RGBA", image.size, (255, 255, 255, 0))
    light_draw = ImageDraw.Draw(light_layer)
    light_draw.ellipse((-width * 0.25, -height * 0.65, width * 0.82, height * 0.65), fill=(255, 250, 231, 48))
    light_layer = light_layer.filter(ImageFilter.GaussianBlur(width // 10))
    image = Image.alpha_composite(image, light_layer)
    image = image.convert("RGB").resize((OUTPUT_WIDTH, OUTPUT_HEIGHT), Image.Resampling.LANCZOS)

    frame_path = frames_dir / f"frame-{frame_index:04d}.png"
    image.save(frame_path, optimize=True)
    return frame_path


def run_ffmpeg(frames_dir: Path, output_dir: Path) -> tuple[Path, Path, Path, Path]:
    mp4_path = output_dir / "elevator-descent.mp4"
    webm_path = output_dir / "elevator-descent.webm"
    poster_path = output_dir / "elevator-descent-poster.webp"
    preview_path = output_dir / "elevator-descent-preview.gif"
    input_pattern = str(frames_dir / "frame-%04d.png")

    commands = [
        [
            "ffmpeg", "-y", "-framerate", str(FPS), "-i", input_pattern,
            "-c:v", "libx264", "-preset", "slow", "-crf", "18",
            "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(mp4_path),
        ],
        [
            "ffmpeg", "-y", "-framerate", str(FPS), "-i", input_pattern,
            "-c:v", "libvpx-vp9", "-crf", "30", "-b:v", "0",
            "-pix_fmt", "yuv420p", str(webm_path),
        ],
        [
            "ffmpeg", "-y", "-i", str(frames_dir / "frame-0000.png"),
            "-frames:v", "1", "-c:v", "libwebp", "-quality", "88", str(poster_path),
        ],
        [
            "ffmpeg", "-y", "-framerate", str(FPS), "-i", input_pattern,
            "-filter_complex",
            "fps=15,scale=600:-1:flags=lanczos,split[s0][s1];"
            "[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer",
            "-loop", "0", str(preview_path),
        ],
    ]
    for command in commands:
        subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
    return mp4_path, webm_path, poster_path, preview_path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output-dir", type=Path, default=Path("public/assets/homepage"))
    parser.add_argument("--frames-dir", type=Path, default=Path("artifacts/elevator-descent/frames"))
    args = parser.parse_args()

    args.output_dir.mkdir(parents=True, exist_ok=True)
    args.frames_dir.mkdir(parents=True, exist_ok=True)
    for index in range(FRAME_COUNT):
        render_frame(index, args.frames_dir)
        print(f"Rendered {index + 1:02d}/{FRAME_COUNT}", flush=True)
    paths = run_ffmpeg(args.frames_dir, args.output_dir)
    print("Created:")
    for path in paths:
        print(path.resolve())


if __name__ == "__main__":
    main()
