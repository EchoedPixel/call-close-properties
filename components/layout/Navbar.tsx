"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold shadow-lg shadow-primary/20">
            <span className="font-heading text-sm font-bold text-background">
              C&C
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight text-white transition-colors group-hover:text-primary-light">
              {SITE.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Properties
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.filter((l) => l.href !== "/book-a-call").map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  pathname === link.href
                    ? "text-primary-light"
                    : "text-muted hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/book-a-call" variant="primary" size="default">
            Book a Free Strategy Call
          </Button>
        </div>

        <button
          type="button"
          className="rounded-xl p-2 text-white transition-colors hover:bg-white/5 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-[80px] z-40 glass border-t border-primary/10 lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary-light"
                      : "text-gray-300 hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
