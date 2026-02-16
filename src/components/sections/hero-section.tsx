import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import { GlowButton } from "@/components/ui/glow-button";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <div className="flex justify-center mb-8">
          <Logo size={120} />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-text leading-tight mb-6 tracking-tight">
          {t("title")}
        </h1>
        <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
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
