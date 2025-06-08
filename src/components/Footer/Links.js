"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Links() {
  const tTitle = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer f-link">
        <h2>{tTitle("quickTitle")}</h2>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <ul>
              <li>
                <Link href="/">
                  <i className="fa fa-caret-right" /> {tNav("home")}
                </Link>
              </li>
              <li>
                <Link href="/doctors">
                  <i className="fa fa-caret-right" /> {tNav("doctors")}
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <i className="fa fa-caret-right" /> {tNav("services")}
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <i className="fa fa-caret-right" /> {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
