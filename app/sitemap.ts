import type { MetadataRoute } from "next";

const BASE_URL = "https://www.provinesconsulting.com";

// lastModified is the date the page's content last changed. Update a page's date when its
// content changes; do not stamp everything with the build time.
const PAGES: [path: string, lastModified: string, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], priority: number][] = [
  ["", "2026-10-06", "weekly", 1],
  ["/ai-agents", "2026-10-06", "monthly", 0.9],
  ["/ai-agents/examples", "2026-10-06", "monthly", 0.8],
  ["/ai-agents/chief-of-staff", "2026-10-06", "monthly", 0.8],
  ["/ai-agents/agent-vs-chatbot", "2026-10-06", "monthly", 0.7],
  ["/ai-consultant", "2026-10-06", "monthly", 0.9],
  ["/ai-integration", "2026-10-06", "monthly", 0.9],
  ["/ai-automation", "2026-10-06", "monthly", 0.9],
  ["/about", "2026-10-06", "monthly", 0.7],
  ["/work", "2026-10-06", "monthly", 0.9],
  ["/work/custom-home-builder", "2026-10-06", "monthly", 0.8],
  ["/work/residential-construction", "2026-10-06", "monthly", 0.8],
  ["/how-it-works", "2026-10-06", "monthly", 0.8],
  ["/growth-audit", "2026-10-06", "monthly", 0.9],
  ["/schedule", "2026-07-10", "monthly", 0.7],
  ["/legal", "2026-07-30", "yearly", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(([path, lastModified, changeFrequency, priority]) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
