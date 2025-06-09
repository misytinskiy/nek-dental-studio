"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import TeamCard from "@/components/TeamCard";
import { useTranslations } from "next-intl";

import TeamImg1 from "../../../../public/img/doc4.jpg";
import TeamImg2 from "../../../../public/img/doc1.jpg";
import TeamImg3 from "../../../../public/img/doc3.jpg";
import TeamImg4 from "../../../../public/img/doc2.jpg";

export default function Doctors() {
  const tPage = useTranslations("pages.doctors");
  const tTeam = useTranslations("team.members");

  const members = [
    { key: "tamarD", img: TeamImg1 },
    { key: "tamarM", img: TeamImg2 },
    { key: "irakli", img: TeamImg4 },
    { key: "nino", img: TeamImg3 },
  ];

  return (
    <>
      <Breadcrumbs title={tPage("title")} menuText={tPage("menu")} />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            {members.map(({ key, img }) => (
              <div key={key} className="col-lg-4 col-md-6 col-12">
                <TeamCard
                  tilt="tilt-disable"
                  image={img}
                  name={tTeam(`${key}.name`)}
                  designation={tTeam(`${key}.role`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
