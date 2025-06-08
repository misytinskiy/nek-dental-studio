import Link from "next/link";

export default function Links() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer f-link">
          <h2>Quick Links</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <ul>
                <li>
                  <Link href="/">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>Home
                  </Link>
                </li>
                <li>
                  <Link href="/doctor">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Doctor
                  </Link>
                </li>

                <li>
                  <Link href="/service">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
