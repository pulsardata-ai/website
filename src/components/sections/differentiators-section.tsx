import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";

export function DifferentiatorsSection() {
  const t = useTranslations("differentiators");

  return (
    <section className="py-20 px-4 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-accent font-mono text-sm mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-text">
                  {t(`items.${i}.title`)}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed ml-8">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
