import { cn } from "@/lib/utils";
import { type TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          ref={ref}
          id={inputId}
          rows={5}
          className={cn(
            "w-full resize-none rounded-xl border border-border bg-surface-elevated px-4 py-3 text-white placeholder:text-gray-500 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
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

Textarea.displayName = "Textarea";
