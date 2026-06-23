import { cn } from "@/lib/utils";
import { type SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-300"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={inputId}
          className={cn(
            "w-full appearance-none rounded-xl border border-border bg-surface-elevated px-4 py-3 text-white transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
            error && "border-red-500",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
