import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tiggi-kids.com",
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
  ];
}
