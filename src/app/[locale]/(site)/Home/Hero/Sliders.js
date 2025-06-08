"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import HeroBg from "../../../../../../public/img/slider2.jpg";

export default function Sliders({ sectionName }) {
  const tHero = useTranslations("hero");

  const slide = {
    bgImg: HeroBg,

    title: tHero.rich("title", {
      span: (chunks) => <span className="highlight">{chunks}</span>,
    }),

    subTitle: tHero("subtitle"),

    button: {
      text: tHero("button"),
      link: "https://api.whatsapp.com/send/?phone=995596330303",
    },
  };

  return (
    <section className={sectionName ?? "slider"}>
      <div
        className="single-slider"
        style={{ backgroundImage: `url(${slide.bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="text">
                <h1>{slide.title}</h1>
                <p>{slide.subTitle}</p>

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
