import type { Metadata } from "next";
import { SITE } from "./constants";

export function createPageMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  const url = path ? `${SITE.url}${path}` : SITE.url;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}
