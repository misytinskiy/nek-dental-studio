import Link from "next/link";

export default function CallAction() {
  return (
    <>
      <section className="call-action overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Book an Appointment.</h2>
                <p>
                  Get personalized dental care quickly – just send us a message
                  on WhatsApp!
                </p>
                <div className="button">
                  <Link href="/contact" className="btn">
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
