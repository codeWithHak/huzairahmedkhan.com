import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Huzair Ahmed Khan | Agentic AI Developer",
    short_name: "HAK",
    description:
      "I don't build chatbots. I build AI employees — autonomous AI agents that reason, plan, and execute complex workflows independently.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#BFE600",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
