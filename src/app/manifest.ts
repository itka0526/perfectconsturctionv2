import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Төгс Бүтээн Босголт — Лифтний бүтээгдэхүүн, үйлчилгээ",
    short_name: "Төгс Бүтээн Босголт",
    description:
      "Монголын барилгын төслүүдэд зориулсан лифтний сонголт, үйлдвэрийн захиалга, тээвэр, угсралт, суурилуулалт.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f4ef",
    theme_color: "#101b3c",
    lang: "mn",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
