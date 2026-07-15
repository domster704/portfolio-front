import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "NTV Club",
    short_name: "NTV Club",
    description: "NTV Club",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      }
    ],
  };
}