import { useTranslations } from "next-intl";
import { MacosWindow } from "@/components/ui/macos-window";

export function ServiceCard({ index }: { index: number }) {
  const t = useTranslations("services");

  const deliverableCount = 5;

  return (
    <MacosWindow title={t(`items.${index}.title`)} className="mb-8">
      <p className="text-text-secondary mb-6 leading-relaxed">
        {t(`items.${index}.what`)}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deliverables */}
        <div>
          <h4 className="text-accent text-sm font-medium mb-2 uppercase tracking-wide">
            {t("deliverables_label")}
          </h4>
          <ul className="space-y-1">
            {Array.from({ length: deliverableCount }, (_, i) => (
              <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                <span className="text-accent shrink-0">&bull;</span>
                {t(`items.${index}.deliverables.${i}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Meta */}
        <div className="space-y-4">
          <div>
            <h4 className="text-accent text-sm font-medium mb-1 uppercase tracking-wide">
              {t("target_label")}
            </h4>
            <p className="text-text-secondary text-sm">{t(`items.${index}.target`)}</p>
          </div>
        </div>
      </div>
    </MacosWindow>
  );
}
