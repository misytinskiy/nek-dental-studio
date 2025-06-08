import FunfactCard from "@/components/FunfactCard";

export default function Funfact() {
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-tooth"
                number="15331"
                desc="PATIENTS SMILED BRIGHTER"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-simple-smile"
                number="9841"
                desc="DENTAL CLEANINGS DONE"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-medical-sign"
                number="332"
                desc="DENTURES FITTED"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-baby"
                number="3213"
                desc="PEDIATRIC APPOINTMENTS"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
