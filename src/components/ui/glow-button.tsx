import { cn } from "@/lib/utils";
import Link from "next/link";

export function GlowButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
        variant === "primary" &&
          "bg-accent text-bg hover:bg-accent-hover",
        variant === "secondary" &&
          "border border-border text-text-secondary hover:border-accent hover:text-accent",
        className
      )}
    >
      {children}
    </Link>
  );
}
