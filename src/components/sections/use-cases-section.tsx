import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { CrtCard } from "@/components/ui/crt-card";

export function UseCasesSection() {
  const t = useTranslations("useCases");

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <CrtCard key={i} title={t(`items.${i}.sector`)}>
              <h3 className="font-heading text-sm text-crt-green mb-2">
                {t(`items.${i}.title`)}
              </h3>
              <p className="text-crt-text-secondary text-sm leading-relaxed">
                {t(`items.${i}.description`)}
              </p>
            </CrtCard>
          ))}
        </div>
      </div>
    </section>
  );
}
