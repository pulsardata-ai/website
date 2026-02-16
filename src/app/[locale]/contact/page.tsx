import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="border border-border rounded-lg bg-bg-card p-5">
              <p className="text-accent text-sm font-medium mb-4">
                {t("info.response")}
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide mb-0.5">Email</p>
                  <p className="text-text-secondary">{t("info.email")}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide mb-0.5">LinkedIn</p>
                  <p>
                    <a
                      href={`https://${t("info.linkedin")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {t("info.linkedin")}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide mb-0.5">GitHub</p>
                  <p>
                    <a
                      href={`https://${t("info.github")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {t("info.github")}
                    </a>
                  </p>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-text-secondary">{t("info.siret")}</p>
                  <p className="text-text-secondary">{t("info.address")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
