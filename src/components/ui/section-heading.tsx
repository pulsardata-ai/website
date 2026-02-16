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
      <h2 className="text-xl md:text-2xl font-bold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-sm font-mono">
          {subtitle}
        </p>
      )}
    </div>
  );
}
