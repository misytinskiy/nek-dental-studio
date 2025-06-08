import Breadcrumbs from "@/components/Breadcrumbs";
import TeamCard from "@/components/TeamCard";

import TeamImg1 from "../../../public/img/doc4.jpg";
import TeamImg2 from "../../../public/img/doc1.jpg";
import TeamImg3 from "../../../public/img/doc3.jpg";
import TeamImg4 from "../../../public/img/doc2.jpg";
import Header from "@/components/Header/Header";

export default function Doctors() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Meet our team of specialists" menuText="Doctors" />

      <section id="team" className="team section single-page">
        <div className="container">
          <div className="row">
            x
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg1}
                name="Dr. Tamar Dgebuadze"
                desgination="Therapist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg2}
                name="Dr. Tamar Mgebrishvili"
                desgination="Periodontist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg4}
                name="Dr. Irakli Beradze"
                desgination="Orthopedic dentist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg3}
                name="Dr. Nino Martiashvili"
                desgination="Therapist, periodontist, surgeon"
              />
            </div>
            {/* <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg1}
                name="Dr.Zurab Shekiladze"
                desgination="Surgeon"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg2}
                name="Dr. Mariam Orjonikidze"
                desgination="Orthodontics dentist"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <TeamCard
                tilt="tilt-disable"
                image={TeamImg2}
                name="Dr. Shalva Toklikishvili"
                desgination="Therapist"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
