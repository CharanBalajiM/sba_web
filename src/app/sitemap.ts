import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sreebalajiadvertising.co.in";
  
  const routes = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/services",
    "/services/sunpack-sheet-printing",
    "/services/auto-top-printing",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.5,
  }));
}
