"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-surface-elevated px-3 py-2 text-foreground transition-colors duration-150 hover:border-primary/40 hover:text-primary-light",
        showLabel && "w-full justify-between px-4 py-3.5 text-base font-medium",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={!isDark}
      suppressHydrationWarning
    >
      {showLabel && (
        <span suppressHydrationWarning>
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>
      )}
      <span className="flex h-5 w-5 items-center justify-center" suppressHydrationWarning>
        {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </span>
    </button>
  );
}
