import { cn } from "@/lib/utils";

export function MacosWindow({
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
        "border border-border rounded-lg bg-bg-card overflow-hidden",
        className
      )}
    >
      {/* macOS title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-card">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {title && (
          <span className="text-text-muted text-xs font-mono ml-2">{title}</span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
