import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Perfect Construction — Лифтний төслийн шийдэл",
    short_name: "Perfect Construction",
    description:
      "Монголын барилгын төслүүдэд зориулсан лифтний сонголт, нийлүүлэлт, угсралтын инженерийн шийдэл.",
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
