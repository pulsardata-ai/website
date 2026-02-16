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
  const t = await getTranslations({ locale, namespace: "expertise.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ExpertisePage() {
  const t = useTranslations("expertise");

  return (
    <section className="pt-28 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* Pascal profile */}
        <CrtCard className="mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-24 h-24 rounded-full bg-bg-card-hover border border-border flex items-center justify-center shrink-0">
              <span className="text-2xl font-semibold text-accent">PL</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-text mb-1">
                {t("pascal.name")}
              </h3>
              <p className="text-accent text-sm mb-4">
                {t("pascal.role")}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {t("pascal.bio")}
              </p>
              <div className="flex flex-wrap gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-xs border border-border text-text-secondary rounded"
                  >
                    {t(`pascal.highlights.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CrtCard>

        {/* Team */}
        <h3 className="text-xl font-semibold text-text mb-6">
          {t("team.title")}
        </h3>
        <div className="max-w-xl mb-12">
          <CrtCard>
            <h4 className="text-base font-semibold text-text mb-1">
              {t("team.matthieu.name")}
            </h4>
            <p className="text-accent text-xs mb-3">
              {t("team.matthieu.role")}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t("team.matthieu.description")}
            </p>
          </CrtCard>
        </div>

        {/* Tech stack */}
        <h3 className="text-xl font-semibold text-text mb-6">
          {t("techStack.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <CrtCard key={i} title={t(`techStack.categories.${i}.title`)}>
              <ul className="space-y-1.5">
                {[0, 1, 2, 3, 4].map((j) => (
                  <li key={j} className="text-text-secondary text-sm flex items-start gap-2">
                    <span className="text-accent shrink-0">&bull;</span>
                    {t(`techStack.categories.${i}.items.${j}`)}
                  </li>
                ))}
              </ul>
            </CrtCard>
          ))}
        </div>
      </div>
    </section>
  );
}
