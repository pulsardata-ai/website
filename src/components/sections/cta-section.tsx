import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowButton } from "@/components/ui/glow-button";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} className="text-center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Audit */}
          <div className="border border-border rounded-lg bg-bg-card p-6">
            <h3 className="text-lg font-semibold text-text mb-3">
              {t("audit.title")}
            </h3>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              {t("audit.description")}
            </p>
            <GlowButton href="/contact" variant="primary">
              {t("audit.button")}
            </GlowButton>
          </div>

          {/* White paper */}
          <div className="border border-border rounded-lg bg-bg-card p-6">
            <h3 className="text-lg font-semibold text-text mb-3">
              {t("whitepaper.title")}
            </h3>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              {t("whitepaper.description")}
            </p>
            <GlowButton href="/contact" variant="secondary">
              {t("whitepaper.button")}
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
