import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Real Estate Lead Generation & Sales Support`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "real estate lead generation",
    "real estate appointment setting",
    "real estate cold calling",
    "lead qualification real estate",
    "real estate sales support",
    "property lead generation",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: `${SITE.name} | Real Estate Lead Generation & Sales Support`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Real Estate Lead Generation & Sales Support`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem("call-close-theme") === "light" ? "light" : "dark";
                  var root = document.documentElement;
                  root.classList.toggle("dark", theme === "dark");
                  root.classList.toggle("light", theme === "light");
                  root.dataset.theme = theme;
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${plusJakarta.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
