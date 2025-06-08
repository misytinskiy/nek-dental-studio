import Breadcrumbs from "@/components/Breadcrumbs";
import PricingData from "../[locale]/(site)/Home/Pricing/PricingData";
import Clients from "../[locale]/(site)/Home/Clients";
import Header from "@/components/Header/Header";

export default function Pricing() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Our Pricing" menuText="Our Pricing" />

      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <PricingData />
          </div>
        </div>
      </section>

      <Clients />
    </>
  );
}
