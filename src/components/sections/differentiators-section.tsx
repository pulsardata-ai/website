import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";

export function DifferentiatorsSection() {
  const t = useTranslations("differentiators");

  return (
    <section className="py-20 px-4 border-y border-crt-border">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => (
            <div key={i} className="group">
              <div className="flex items-start gap-3 mb-3">
                <span className="font-terminal text-crt-accent text-xl mt-0.5">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <h3 className="font-heading text-base text-crt-green group-hover:text-glow transition-all">
                  {t(`items.${i}.title`)}
                </h3>
              </div>
              <p className="text-crt-text-secondary text-sm leading-relaxed ml-10">
                {t(`items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
