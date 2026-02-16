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
        "border border-border rounded bg-bg-card box-glow box-glow-hover transition-all duration-300",
        className
      )}
    >
      {title && (
        <div className="border-b border-border px-4 py-2 text-text-muted text-sm font-terminal tracking-wider">
          <span className="text-green-dim mr-2">{">"}</span>
          {title}
          <span className="cursor-blink" />
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
