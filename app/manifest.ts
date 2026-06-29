import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Call & Close Properties | Real Estate Lead Generation",
    short_name: "Call & Close",
    description:
      "Real estate lead generation specialists helping wholesalers, investors, and home-buying companies book qualified appointments through expert cold calling, lead qualification, and sales support.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#d4a64f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
