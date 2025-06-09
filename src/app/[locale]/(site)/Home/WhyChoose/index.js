"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import WhyChooseImg1 from "../../../../../../public/img/WhyChooseImg1.JPG";

export default function WhyChoose() {
  const t = useTranslations("about");

  return (
    <section className="why-choose section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="choose-left">
              <h3>{t("missionTitle")}</h3>
              <p>{t("missionP1")}</p>
              <p>{t("missionP2")}</p>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="choose-right mb-4 text-center">
              <div>
                <Image
                  src={WhyChooseImg1}
                  alt="our clinic"
                  width={571}
                  height={370}
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
