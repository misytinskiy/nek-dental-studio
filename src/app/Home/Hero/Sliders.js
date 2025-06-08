"use client";

import Image from "next/image";
import HeroBg from "../../../../public/img/slider2.jpg"; // основная картинка-фон

export default function Sliders({ sectionName }) {
  // всё, что раньше было в heroSliders[0]
  const slide = {
    bgImg: HeroBg,
    title:
      "​​Experience personalized treatment in a <span>comfortable</span> and welcoming environment, where your dental health is our <span>priority.</span>",
    subTitle:
      "Your smile is our mission. Proudly serving our community with quality dental care and a touch of compassion.",
    button: {
      text: "Get Appointment",
      link: "https://api.whatsapp.com/send/?phone=995596330303&text=&type=phone_number&app_absent=0",
    },
  };

  return (
    <section className={sectionName ? sectionName : "slider"}>
      <div
        className="single-slider"
        style={{
          backgroundImage: `url(${slide.bgImg.src})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="text">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: slide.title,
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: slide.subTitle,
                  }}
                />
                <div className="button">
                  <a href={slide.button.link} className="btn">
                    {slide.button.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
