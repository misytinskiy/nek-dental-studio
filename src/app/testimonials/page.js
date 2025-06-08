import Breadcrumbs from "@/components/Breadcrumbs";
import Features from "../[locale]/(site)/Home/Features";
import Funfact from "../[locale]/(site)/Home/Funfact";
import Services from "../[locale]/(site)/Home/Services";
import Testimonial from "../[locale]/(site)/Home/Testimonials";
import Header from "@/components/Header/Header";

export default function Testimonials() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Testimonials" menuText="Testimonials" />

      <Features sectionName="Feautes testimonial-page section" />

      <Funfact />

      <Services />

      <Testimonial />
    </>
  );
}
