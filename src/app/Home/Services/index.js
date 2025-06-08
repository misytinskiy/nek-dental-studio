import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-prescription"
                title="ADVANCED DENTAL PROCEDURES"
                desc="Cutting-edge technology for all treatments, ensuring effective and quick results."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-tooth"
                title="PEDIATRIC DENTISTRY"
                desc="Friendly care for children, making dental health accessible and fun."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-heart-alt"
                title="PREVENTATIVE CARE"
                desc="Regular exams and cleanings to prevent issues, with advice on oral health maintenance."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-listening"
                title="AESTHETIC DENTISTRY"
                desc="Tailored aesthetic services to enhance your smile, including whitening and orthodontics."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-eye-alt"
                title="EMERGENCY DENTAL SERVICES"
                desc="Fast relief for dental emergencies to alleviate pain and prevent complications."
              />
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <ServiceCard
                icon="icofont icofont-blood"
                title="RESTORATIVE DENTISTRY"
                desc="Repairing or replacing damaged teeth to restore function and confidence in your smile."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
