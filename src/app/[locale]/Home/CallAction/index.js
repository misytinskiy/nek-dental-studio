"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function CallAction() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="call-action overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="content">
              <h2>{t("heading")}</h2>
              <p>{t("sub")}</p>
              <div className="button">
                <Link href={`/${locale}/contact`} className="btn">
                  {t("button")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
