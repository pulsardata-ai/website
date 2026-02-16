import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, size = 48 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo-pulsardata.jpg"
      alt="pulsardata.ai"
      width={size}
      height={size}
      className={cn("rounded-full", className)}
      priority
    />
  );
}
