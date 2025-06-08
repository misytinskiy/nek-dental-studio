"use client";

import ServiceCard from "@/components/ServiceCard";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("features");

  const blocks = [
    { key: "advanced", icon: "icofont icofont-prescription" },
    { key: "pediatric", icon: "icofont icofont-tooth" },
    { key: "preventive", icon: "icofont icofont-heart-alt" },
    { key: "aesthetic", icon: "icofont icofont-listening" },
    { key: "emergency", icon: "icofont icofont-eye-alt" },
    { key: "restorative", icon: "icofont icofont-blood" },
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
