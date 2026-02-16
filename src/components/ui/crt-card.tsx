import { cn } from "@/lib/utils";

export function CrtCard({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border border-border rounded-lg bg-bg-card hover:border-border-hover transition-colors duration-200",
        className
      )}
    >
      {title && (
        <div className="border-b border-border px-4 py-2 text-text-muted text-sm font-mono">
          {title}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
