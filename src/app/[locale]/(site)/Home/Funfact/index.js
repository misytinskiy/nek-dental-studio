"use client";

import FunfactCard from "@/components/FunfactCard";
import { useTranslations } from "next-intl";

export default function Funfact() {
  const t = useTranslations("funfacts");

  return (
    <div id="fun-facts" className="fun-facts section overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <FunfactCard
              icon="icofont icofont-tooth"
              number="15331"
              desc={t("patients")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <FunfactCard
              icon="icofont icofont-simple-smile"
              number="9841"
              desc={t("cleanings")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <FunfactCard
              icon="icofont icofont-medical-sign"
              number="332"
              desc={t("dentures")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <FunfactCard
              icon="icofont icofont-baby"
              number="3213"
              desc={t("pediatric")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
