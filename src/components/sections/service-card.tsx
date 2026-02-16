import { useTranslations } from "next-intl";
import { CrtCard } from "@/components/ui/crt-card";

export function ServiceCard({ index }: { index: number }) {
  const t = useTranslations("services");

  const deliverableCount = 5;

  return (
    <CrtCard title={`service_${String(index).padStart(2, "0")}`} className="mb-8">
      <h3 className="font-heading text-xl text-crt-green text-glow mb-4">
        {t(`items.${index}.title`)}
      </h3>

      <p className="text-crt-text mb-6 leading-relaxed">
        {t(`items.${index}.what`)}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deliverables */}
        <div>
          <h4 className="font-terminal text-crt-accent text-sm mb-2 uppercase">
            {t("deliverables_label")}
          </h4>
          <ul className="space-y-1">
            {Array.from({ length: deliverableCount }, (_, i) => (
              <li key={i} className="text-crt-text-secondary text-sm flex items-start gap-2">
                <span className="text-crt-green-medium shrink-0">$</span>
                {t(`items.${index}.deliverables.${i}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Meta */}
        <div className="space-y-4">
          <div>
            <h4 className="font-terminal text-crt-accent text-sm mb-1 uppercase">
              {t("target_label")}
            </h4>
            <p className="text-crt-text-secondary text-sm">{t(`items.${index}.target`)}</p>
          </div>
        </div>
      </div>
    </CrtCard>
  );
}
