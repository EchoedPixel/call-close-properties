"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE, NAV_LINKS, FOOTER_SERVICES } from "@/lib/constants";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine dark mode assets safely after mounting on the client side
  const isDark = mounted && theme === "dark";
  const containerBg = isDark ? "bg-black" : "bg-white";
  const imageSrc = isDark ? "/ccp logodarkbgnoccp.svg" : "/ccp logowhitebgnoccp.svg";

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3">
              <div 
                className={`flex h-40 w-95 items-center justify-center rounded-xl transition-colors duration-150 ${containerBg}`}
              >
              <Image
                  key={mounted ? theme : "ssr"} // Forces a clean re-render when theme changes
                  src={imageSrc}
                  alt="Company Logo"
                  width={50}
                  height={40}
                  className="scale-80 w-auto h-auto"
                />
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="flex gap-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary-light"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary-light"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all duration-300 hover:border-primary/40 hover:text-primary-light"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-light">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-primary-light"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-primary" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-primary-light"
                >
                  <Phone size={18} className="mt-0.5 shrink-0 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/contact"
              className="text-sm text-muted transition-colors hover:text-primary-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted transition-colors hover:text-primary-light"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
