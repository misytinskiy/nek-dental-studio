import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import Header from "@/components/Header/Header";
import SectionHead from "@/components/SectionHead";
import PriceTabs from "@/components/PriceTabs/PriceTabs";

export default function Pricing() {
  return (
    <>
      <Header />
      <Breadcrumbs title="Service" menuText="Service" />

      <section className="price-list-area section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="Current Treatment Fees"
                desc="Choose a direction to see detailed prices for every service."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <PriceTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
