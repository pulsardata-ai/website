"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Logo } from "@/components/logo";
import { GlowButton } from "@/components/ui/glow-button";
import { TerminalText } from "@/components/ui/terminal-text";

const ParticleSpiral = dynamic(
  () => import("@/components/ui/particle-spiral").then((m) => m.ParticleSpiral),
  { ssr: false }
);

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleSpiral />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <div className="flex justify-center mb-8">
          <Logo size={80} className="shadow-[0_0_30px_rgba(0,255,65,0.3)]" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-crt-green text-glow-lg leading-tight mb-6">
          <TerminalText text={t("title")} speed={25} />
        </h1>
        <p className="text-base md:text-lg text-crt-text-secondary font-body max-w-2xl mx-auto mb-10 leading-relaxed">
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
