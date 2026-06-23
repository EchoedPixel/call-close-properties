import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-300"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-white placeholder:text-gray-500 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
