import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const BASE_URL = "https://huzairahmedkhan.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectEntries: MetadataRoute.Sitemap = getAllProjects().map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectEntries,
  ];
}
