"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // Added mount tracking
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = mounted && theme === "dark";

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-colors duration-150",
        scrolled
          ? "glass border-b border-primary/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          {/* Using explicit Tailwind utilities instead of a JS condition string */}
        <div
          className={`flex h-12 w-17 items-center justify-center rounded-xl ${
            isDark ? "bg-black" : "bg-white"
          }`}
        >
              <Image
              src="/logo_only.svg"
              alt="Company Logo"
              width={40}
              height={40}
              className="scale-80 w-auto h-auto"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary-light">
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
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/book-a-call" variant="primary" size="default">
            Book a Free Strategy Call
          </Button>
        </div>

        <button
          type="button"
          className="relative z-[90] rounded-xl border border-border bg-surface/90 p-2 text-foreground transition-colors hover:bg-surface-elevated lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-[80px] z-[70] bg-background backdrop-blur-sm lg:hidden">
          <div className="h-full border-t border-border bg-background">
            <ul className="flex flex-col gap-1 px-5 py-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary-light"
                      : "text-foreground hover:bg-surface-elevated"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
              <li className="mt-4 border-t border-border pt-4">
                <ThemeToggle showLabel />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
