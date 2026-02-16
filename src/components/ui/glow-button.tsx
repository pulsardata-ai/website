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
        "inline-block px-7 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-200",
        variant === "primary" &&
          "bg-green text-bg border border-green hover:bg-green-bright hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]",
        variant === "secondary" &&
          "border border-green-dark text-green-medium hover:border-green hover:text-green hover:shadow-[0_0_12px_rgba(0,255,65,0.15)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
