import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-2xl md:text-3xl font-heading text-glow-md mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-terminal text-crt-text-secondary text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
