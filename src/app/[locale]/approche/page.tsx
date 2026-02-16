import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { CrtCard } from "@/components/ui/crt-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "approach.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ApprochePage() {
  const t = useTranslations("approach");

  return (
    <section className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* Phases timeline */}
        <div className="relative space-y-8 mb-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="relative flex gap-6">
              {/* Phase number */}
              <div className="shrink-0 w-12 h-12 rounded-full border border-accent bg-bg flex items-center justify-center z-10">
                <span className="text-sm font-semibold text-accent">
                  {t(`phases.${i}.number`)}
                </span>
              </div>

              {/* Content */}
              <CrtCard className="flex-1">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-text">
                    {t(`phases.${i}.title`)}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {t(`phases.${i}.description`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3].map((j) => (
                    <span
                      key={j}
                      className="inline-block px-2 py-0.5 text-xs border border-border text-text-secondary rounded"
                    >
                      {t(`phases.${i}.outputs.${j}`)}
                    </span>
                  ))}
                </div>
              </CrtCard>
            </div>
          ))}
        </div>

        {/* Prerequisites */}
        <SectionHeading
          title={t("prerequisites.title")}
          subtitle={t("prerequisites.subtitle")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-accent text-lg shrink-0">
                &bull;
              </span>
              <div>
                <h4 className="text-sm font-semibold text-text mb-1">
                  {t(`prerequisites.items.${i}.title`)}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(`prerequisites.items.${i}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
