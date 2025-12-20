import { cn } from "src/lib/utils";
import * as React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full px-[14px] h-[50px] py-3 border border-quatanery rounded-[10px] focus:outline-none focus:ring-2 focus:ring-commodore  dark:bg-commodore  dark:border-whitefade/20 dark:focus:ring-white/20 appearance-none",
        // "w-full px-4 py-3 ",
        // "rounded-md",
        // "text-lg font-bold",
        // "border border-quatanery",
        // "bg-white text-white", // Dark background color from the design
        // "text-secondary placeholder:text-gray-400",
        // " focus:outline-none focus:ring-2 focus:ring-commodore  focus:border-transparent",
        // "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
