import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
  metadataBase: new URL("https://callcloseproperties.com"),

  title: {
    default: "Call & Close Properties | Real Estate Lead Generation",
    template: "%s | Call & Close Properties",
  },

  description:
    "Real estate lead generation specialists helping wholesalers, investors, and home-buying companies book qualified appointments through expert cold calling, lead qualification, and sales support.",

  keywords: [
    "real estate lead generation",
    "real estate appointment setting",
    "real estate cold calling",
    "lead qualification",
    "real estate sales support",
    "wholesaler leads",
    "real estate investors",
    "home buying companies",
  ],

  authors: [{ name: "Call & Close Properties" }],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://callcloseproperties.com",
    siteName: "Call & Close Properties",
    title: "Call & Close Properties | Real Estate Lead Generation",
    description:
      "Book more qualified appointments through expert real estate cold calling and lead generation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Call & Close Properties",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Call & Close Properties | Real Estate Lead Generation",
    description:
      "Book more qualified appointments through expert real estate cold calling and lead generation.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
