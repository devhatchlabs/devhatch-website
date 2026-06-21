import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Electric-blue background, white text
        default:
          "bg-electric-blue text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow-blue",
        // White background, navy text, blue border
        outline:
          "border border-electric-blue/50 bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:border-electric-blue hover:bg-soft-blue",
        // Transparent with blue hover state
        ghost:
          "bg-transparent text-navy hover:bg-soft-blue hover:text-electric-blue",
        // Electric-blue to cyan gradient
        gradient:
          "bg-gradient-to-r from-electric-blue to-cyan text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow-cyan",
        // Kept for backward compatibility with existing usage
        secondary:
          "border border-border bg-soft-blue text-navy hover:bg-ice",
        link: "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-11 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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