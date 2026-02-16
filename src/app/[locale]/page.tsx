import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { CodeShowcaseSection } from "@/components/sections/code-showcase-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { GovernanceSection } from "@/components/sections/governance-section";
import { ArchimateSection } from "@/components/sections/archimate-section";
import { GovernanceDiagramSection } from "@/components/sections/governance-diagram-section";
import { CtaSection } from "@/components/sections/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ArchimateSection />
      <CodeShowcaseSection />
      <ValuePropositionSection />
      <DifferentiatorsSection />
      <GovernanceSection />
      <GovernanceDiagramSection />
      <UseCasesSection />
      <CtaSection />
    </>
  );
}
