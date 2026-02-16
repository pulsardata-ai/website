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
        "border border-crt-border rounded-sm bg-crt-bg/80 box-glow box-glow-hover transition-shadow duration-300",
        className
      )}
    >
      {title && (
        <div className="border-b border-crt-border px-4 py-2 font-terminal text-crt-green text-sm">
          <span className="text-crt-text-secondary">$</span> {title}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}
