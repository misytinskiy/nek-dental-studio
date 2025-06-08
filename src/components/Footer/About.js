import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-12">
        <div className="single-footer">
          <h2>Find Us in social media</h2>

          <ul className="social">
            <li>
              <Link href="https://www.facebook.com/NekDental/" legacyBehavior>
                <a target="blank">
                  <i className="icofont-facebook"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/nekdentalstudio/"
                legacyBehavior
              >
                <a target="blank">
                  <i className="icofont-instagram"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
