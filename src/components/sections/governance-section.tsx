import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { CrtCard } from "@/components/ui/crt-card";

export function GovernanceSection() {
  const t = useTranslations("governance");

  return (
    <section className="py-20 px-4 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <p className="text-text-secondary text-sm leading-relaxed font-mono max-w-4xl mb-12">
          {t("intro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <CrtCard key={i} title={t(`pillars.${i}.title`)}>
              <p className="text-text-secondary text-sm leading-relaxed">
                {t(`pillars.${i}.description`)}
              </p>
            </CrtCard>
          ))}
        </div>
      </div>
    </section>
  );
}
