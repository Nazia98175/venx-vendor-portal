import { cn } from "src/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-tangerine text-white hover:bg-white text-base lg:text-lg hover:text-tangerine border border-transparent hover:border-tangerine ",
        destructive:
          "bg-red-600 text-destructive-foreground hover:bg-red-700 font-normal text-sm lg:text-base",
        outline:
          " text-white bg-commodore   hover:bg-subterranean dark:hover:bg-white/10 hover:border-whitefade/20 hover:text-white font-normal text-sm lg:text-base",
        secondary:
          "text-commodore  bg-commodore   hover:bg-subterranean dark:hover:bg-white/10 hover:border-whitefade/20 hover:text-white font-normal text-sm lg:text-base",
        ghost: "hover:bg-accent hover:text-accent-foreground text-commodore ",
        link: "text-commodore  underline-offset-4 hover:underline",
      },
      size: {
        default: "w-full px-4 py-3 ",
        auth: "w-full  py-[14px] mt-[30px] text-base lg:text-lg",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
