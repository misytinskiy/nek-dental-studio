"use client";

import { useTranslations } from "next-intl";
import LocalizedLink from "@/components/LocalizedLink";

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
                <LocalizedLink href="/">
                  <i className="fa fa-caret-right" /> {tNav("home")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/doctors">
                  <i className="fa fa-caret-right" /> {tNav("doctors")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/service">
                  <i className="fa fa-caret-right" /> {tNav("services")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink href="/contact">
                  <i className="fa fa-caret-right" /> {tNav("contact")}
                </LocalizedLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
