import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { CrtCard } from "@/components/ui/crt-card";

const icons = ["[arch]", "[law]", "[plug]"];

export function ValuePropositionSection() {
  const t = useTranslations("valueProposition");

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <CrtCard key={i} title={icons[i]}>
              <h3 className="font-heading text-lg text-crt-green mb-3">
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
