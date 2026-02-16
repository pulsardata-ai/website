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
            <div className="border border-crt-border rounded-sm p-5 box-glow">
              <p className="font-terminal text-crt-accent text-sm mb-4">
                {t("info.response")}
              </p>
              <div className="space-y-3 font-terminal text-sm">
                <div>
                  <span className="text-crt-green-dark">$ email</span>
                  <p className="text-crt-text-secondary">{t("info.email")}</p>
                </div>
                <div>
                  <span className="text-crt-green-dark">$ linkedin</span>
                  <p>
                    <a
                      href={`https://${t("info.linkedin")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crt-text-secondary hover:text-crt-green"
                    >
                      {t("info.linkedin")}
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-crt-green-dark">$ github</span>
                  <p>
                    <a
                      href={`https://${t("info.github")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-crt-text-secondary hover:text-crt-green"
                    >
                      {t("info.github")}
                    </a>
                  </p>
                </div>
                <div className="pt-3 border-t border-crt-border">
                  <span className="text-crt-green-dark">$ company</span>
                  <p className="text-crt-text-secondary">{t("info.siret")}</p>
                  <p className="text-crt-text-secondary">{t("info.address")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
