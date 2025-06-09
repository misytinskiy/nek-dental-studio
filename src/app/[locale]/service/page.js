"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHead from "@/components/SectionHead";
import PriceTabs from "@/components/PriceTabs/PriceTabs";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pages.pricing");

  return (
    <>
      <Breadcrumbs title={t("title")} menuText={t("menu")} />

      <section className="price-list-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead title={t("heading")} desc={t("desc")} />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <PriceTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
