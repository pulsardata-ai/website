import { useTranslations } from "next-intl";
import { GlowButton } from "@/components/ui/glow-button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient - not flashy */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 45%, rgba(0,255,65,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          {t("title")}
        </h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-mono text-sm">
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GlowButton href="/contact" variant="primary">
            {t("cta1")}
          </GlowButton>
          <GlowButton href="/services" variant="secondary">
            {t("cta2")}
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
