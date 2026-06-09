import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tiggi Kids Chocolate",
    short_name: "Tiggi Kids",
    description: "Premium playful luxury сайт детского шоколада Tiggi Kids.",
    start_url: "/",
    display: "standalone",
    background_color: "#f9f1e3",
    theme_color: "#ff8c5a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
