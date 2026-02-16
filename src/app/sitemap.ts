import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pulsardata.ai";
  const pages = ["", "/services", "/expertise", "/approche", "/contact"];
  const locales = ["", "/en"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );
}
