"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const inputStyles =
  "w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text text-sm placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(`[pulsardata.ai] ${data.get("needType")} - ${data.get("company")}`);
    const body = encodeURIComponent(
      `Nom: ${data.get("name")}\nEntreprise: ${data.get("company")}\nEmail: ${data.get("email")}\nTelephone: ${data.get("phone")}\nBesoin: ${data.get("needType")}\nBudget: ${data.get("budget")}\n\n${data.get("message")}`
    );

    window.location.href = `mailto:contact@pulsardata.ai?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-text text-sm mb-1.5">
            {t("name")} *
          </label>
          <input type="text" name="name" required className={inputStyles} />
        </div>
        <div>
          <label className="block text-text text-sm mb-1.5">
            {t("company")} *
          </label>
          <input type="text" name="company" required className={inputStyles} />
        </div>
        <div>
          <label className="block text-text text-sm mb-1.5">
            {t("email")} *
          </label>
          <input type="email" name="email" required className={inputStyles} />
        </div>
        <div>
          <label className="block text-text text-sm mb-1.5">
            {t("phone")}
          </label>
          <input type="tel" name="phone" className={inputStyles} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-text text-sm mb-1.5">
            {t("needType")} *
          </label>
          <select name="needType" required className={inputStyles}>
            <option value="">--</option>
            {[0, 1, 2, 3, 4].map((i) => (
              <option key={i} value={t(`needTypes.${i}`)}>
                {t(`needTypes.${i}`)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-text text-sm mb-1.5">
            {t("budget")}
          </label>
          <select name="budget" className={inputStyles}>
            <option value="">--</option>
            {[0, 1, 2, 3, 4].map((i) => (
              <option key={i} value={t(`budgets.${i}`)}>
                {t(`budgets.${i}`)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-text text-sm mb-1.5">
          {t("message")} *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={inputStyles}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-accent text-bg text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
      >
        {t("submit")}
      </button>

      {status === "success" && (
        <p className="text-accent text-sm">
          {t("success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          {t("error")}
        </p>
      )}
    </form>
  );
}
