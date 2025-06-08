"use client";

import SectionHead from "@/components/SectionHead";
import TeamCard from "@/components/TeamCard";
import { useTranslations } from "next-intl";

import SectionImg from "../../../../../../public/img/section-img2.png";

import TeamImg1 from "../../../../../../public/img/doc4.jpg";
import TeamImg2 from "../../../../../../public/img/doc1.jpg";
import TeamImg3 from "../../../../../../public/img/doc3.jpg";
import TeamImg4 from "../../../../../../public/img/doc2.jpg";

export default function Team() {
  const t = useTranslations("team");

  const members = [
    { key: "tamarD", img: TeamImg1 },
    { key: "tamarM", img: TeamImg2 },
    { key: "irakli", img: TeamImg4 },
    { key: "nino", img: TeamImg3 },
  ];

  return (
    <section id="team" className="team section overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionHead
              img={SectionImg}
              title={t("heading")}
              desc={t("sub")}
            />
          </div>
        </div>

        <div className="row">
          {members.map(({ key, img }) => (
            <div key={key} className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={img}
                name={t(`members.${key}.name`)}
                designation={t(`members.${key}.role`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
