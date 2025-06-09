"use client";

import Breadcrumbs from "@/components/Breadcrumbs";

import { useTranslations } from "next-intl";
import WorkHour from "./WorkHour";

export default function Contact() {
  const t = useTranslations("pages.contact");
  const tFooter = useTranslations("footer.open");

  return (
    <>
      <Breadcrumbs title={t("title")} menuText={t("menu")} />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              {/* Map */}
              <div className="col-lg-6">
                <div className="contact-us-left">
                  <div id="myMap">
                    <iframe
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=65%20Zakaria%20Paliashvili%20Street%20Tbilisi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>{t("hoursTitle")}</h2>
                  <p>{t("hoursSub")}</p>
                  <WorkHour />
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont icofont-ui-call"></i>
                  <div className="content">
                    <h3>+(995) 596 33 03 03</h3>
                    <p>nekdentalstudio@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont-google-map"></i>
                  <div className="content">
                    <h3>{t("addressLine1")}</h3>
                    <p>{t("addressLine2")}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>{tFooter("weekdays")}: 11:00 – 19:00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
