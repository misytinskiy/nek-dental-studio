import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import WorkHour from "../appointment/WorkHour";

export default function Contact() {
  return (
    <>
      <Header />

      <Breadcrumbs title="Contact Us" menuText="Contact Us" />

      <section className="contact-us section">
        <div className="container">
          <div className="inner">
            <div className="row">
              {/* Левая колонка: карта */}
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

              {/* Правая колонка: часы работы */}
              <div className="col-lg-6">
                <div className="contact-us-form">
                  <h2>Working Hours</h2>
                  <p>Feel free to visit us during the hours below.</p>

                  <WorkHour />
                </div>
              </div>
            </div>
          </div>

          {/* Контактная информация */}
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
                    <h3>65 Zakaria Paliashvili Street</h3>
                    <p>Tbilisi</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="single-info">
                  <i className="icofont icofont-wall-clock"></i>
                  <div className="content">
                    <h3>Mon – Fri: 11:00 – 19:00</h3>
                    <p>Saturday, Sunday Closed</p>
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
