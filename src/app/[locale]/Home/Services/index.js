"use client";

import ServiceCard from "@/components/ServiceCard";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("features");

  const blocks = [
    { key: "advanced", icon: "icofont icofont-prescription" },

    { key: "pediatric", icon: "icofont icofont-baby-milk-bottle" },

    { key: "preventive", icon: "icofont icofont-shield" },

    { key: "aesthetic", icon: "icofont icofont-drug" },

    { key: "emergency", icon: "icofont icofont-ambulance-cross" },

    { key: "restorative", icon: "icofont icofont-tooth" },
  ];

  return (
    <section className="services section">
      <div className="container">
        <div className="row">
          {blocks.map(({ key, icon }) => (
            <div key={key} className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon={icon}
                title={t(`${key}.title`)}
                desc={t(`${key}.text`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
