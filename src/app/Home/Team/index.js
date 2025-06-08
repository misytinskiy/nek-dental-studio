import SectionHead from "@/components/SectionHead";
import TeamCard from "@/components/TeamCard";

import SectionImg from "../../../../public/img/section-img2.png";

import TeamImg1 from "../../../../public/img/doc4.jpg";
import TeamImg2 from "../../../../public/img/doc1.jpg";
import TeamImg3 from "../../../../public/img/doc3.jpg";
import TeamImg4 from "../../../../public/img/doc2.jpg";

export default function Team() {
  return (
    <>
      <section id="team" className="team section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                img={SectionImg}
                title="MEET OUR TEAM OF SPECIALISTS"
                desc="We make sure that your oral health are in good hands."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg1}
                name="Dr. Tamar Dgebuadze"
                designation="Therapist"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <TeamCard
                image={TeamImg2}
                name="Dr. Tamar Mgebrishvili"
                designation="Periodontist"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <TeamCard
                image={TeamImg4}
                name="Dr. Irakli Beradze"
                designation="Orthopedic dentist"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <TeamCard
                image={TeamImg3}
                name="Dr. Nino Martiashvili"
                designation="Therapist, periodontist, surgeon"
              />
            </div>
            {/* <div className="col-lg-3 col-md-6 col-12 ">
              <TeamCard
                image={TeamImg3}
                name="Dr.Zurab Shekiladze"
                designation="Surgeon"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <TeamCard
                image={TeamImg3}
                name="Dr. Mariam Orjonikidze"
                designation="Orthodontics dentist"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <TeamCard
                image={TeamImg4}
                name="Dr. Shalva Toklikishvili"
                designation="Therapist"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
