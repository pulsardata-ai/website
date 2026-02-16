import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 48,
  priority = true,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-pulsardata.jpg"
      alt="pulsardata.ai"
      width={size}
      height={size}
      sizes={`${size}px`}
      className={cn("rounded-full", className)}
      priority={priority}
    />
  );
}
