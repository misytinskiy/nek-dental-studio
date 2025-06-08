"use client";

import { useTranslations } from "next-intl";
import LocalizedLink from "@/components/LocalizedLink";

export default function Breadcrumbs({ title, menuText }) {
  const tNav = useTranslations("nav");

  return (
    <div className="breadcrumbs overlay">
      <div className="container">
        <div className="bread-inner">
          <div className="row">
            <div className="col-12">
              <h2>{title ?? tNav("teamTitle")}</h2>

              <ul className="bread-list">
                <li>
                  <LocalizedLink href="/">{tNav("home")}</LocalizedLink>
                </li>
                <li>
                  <i className="icofont-simple-right" />
                </li>
                <li className="active">{menuText ?? tNav("doctors")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
