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
      <h2 className="text-2xl md:text-3xl font-semibold text-text mb-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
