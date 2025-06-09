import CallAction from "./Home/CallAction";
import Departments from "./Home/Departments";
import Funfact from "./Home/Funfact";
import Hero from "./Home/Hero";
import Services from "./Home/Services";
import Team from "./Home/Team";
import WhyChoose from "./Home/WhyChoose";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <WhyChoose />
      <Funfact />
      <Services />
      <CallAction />
      <Departments />
      <Team />
    </>
  );
}
