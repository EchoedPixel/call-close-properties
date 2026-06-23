import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variants = {
  primary:
    "bg-gradient-gold text-background font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:brightness-110 active:scale-[0.98]",
  secondary:
    "glass text-white hover:border-primary/30 hover:bg-surface-elevated/80",
  outline:
    "border border-primary/40 text-primary-light hover:bg-primary/5 hover:border-primary/60",
  ghost: "text-muted hover:text-primary-light hover:bg-white/5",
};

const sizes = {
  default: "rounded-xl px-6 py-3 text-sm",
  lg: "rounded-xl px-8 py-4 text-base",
};

function isExternalUrl(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external || isExternalUrl(href)) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
