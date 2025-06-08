import HeaderTwo from "@/components/Header/HeaderTwo";
import Hero from "../[locale]/(site)/Home/Hero";
import Features from "../[locale]/(site)/Home/Features";
import Funfact from "../[locale]/(site)/Home/Funfact";
import WhyChoose from "../[locale]/(site)/Home/WhyChoose";
import CallAction from "../[locale]/(site)/Home/CallAction";
import Portfolio from "../[locale]/(site)/Home/Portfolio";
import Services from "../[locale]/(site)/Home/Services";
import Testimonial from "../[locale]/(site)/Home/Testimonials";
import Departments from "../[locale]/(site)/Home/Departments";
import Pricing from "../[locale]/(site)/Home/Pricing";
import Team from "../[locale]/(site)/Home/Team";
import Blog from "../[locale]/(site)/Home/Blog";
import Clients from "../[locale]/(site)/Home/Clients";
import Appoinment from "../[locale]/(site)/Home/Appoinment";

export default function HomeTwo() {
  return (
    <>
      <HeaderTwo />
      <Hero sectionName="slider index2" />
      <Features sectionName="Feautes index2 section" />
      <Funfact />
      <WhyChoose />
      <CallAction />
      <Portfolio />
      <Services />
      <Testimonial />
      <Departments />
      <Pricing />
      <Team />
      <Blog />
      <Clients />
      <Appoinment />
    </>
  );
}
