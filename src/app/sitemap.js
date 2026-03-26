export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/services", priority: 0.8 },
    { url: "/education", priority: 0.8 },
    { url: "/projects", priority: 0.9 },
    { url: "/contact", priority: 0.7 },
  ];

  return routes.map(({ url, priority }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
