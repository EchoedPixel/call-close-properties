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
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
