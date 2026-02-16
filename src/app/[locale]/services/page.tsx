import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/service-card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <section className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        {[0, 1, 2, 3].map((i) => (
          <ServiceCard key={i} index={i} />
        ))}
      </div>
    </section>
  );
}
