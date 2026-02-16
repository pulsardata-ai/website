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
        "relative z-[60] inline-block px-6 py-3 font-heading text-sm uppercase tracking-wider rounded-sm transition-all duration-300",
        variant === "primary" &&
          "bg-crt-green text-black font-bold hover:bg-crt-accent hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]",
        variant === "secondary" &&
          "border border-crt-green text-crt-green hover:bg-crt-green/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.15)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
