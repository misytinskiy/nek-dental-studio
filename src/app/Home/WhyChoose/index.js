import Image from "next/image";
import WhyChooseImg1 from "../../../../public/img/WhyChooseImg1.JPG";

export default function WhyChoose() {
  return (
    <>
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>Our mission</h3>
                <p>
                  At Nek Dental Studio, we are more than just a dental practice;
                  we are a community of passionate dental professionals
                  dedicated to crafting beautiful smiles and enhancing oral
                  health. With a team of highly skilled dentists, hygienists,
                  and dental assistants, we offer a comprehensive range of
                  services from preventive care and routine check-ups to
                  advanced cosmetic dentistry and oral surgery.
                </p>
                <p>
                  Our state-of-the-art facility is equipped with the latest in
                  dental technology, ensuring every treatment is performed with
                  the utmost precision and comfort. At Nek Dental Studio, we
                  believe in a patient-centered approach, where every visit is
                  tailored to meet your individual needs and expectations. Our
                  mission is to provide exceptional dental care in a welcoming
                  and relaxing environment, helping you to achieve and maintain
                  a healthy, radiant smile.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="choose-right">
                <div className="video-image">
                  <Image src={WhyChooseImg1} alt="#" width={571} height={370} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
