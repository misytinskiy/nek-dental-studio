"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("footer");

  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer">
        <h2>{t("socialTitle")}</h2>

        <ul className="social">
          <li>
            <Link href="https://www.facebook.com/NekDental/" target="_blank">
              <i className="icofont-facebook" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/nekdentalstudio/"
              target="_blank"
            >
              <i className="icofont-instagram" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
