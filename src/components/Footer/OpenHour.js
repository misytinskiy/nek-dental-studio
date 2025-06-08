"use client";

import { useTranslations } from "next-intl";

export default function OpenHour() {
  const t = useTranslations("footer.open");

  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="single-footer">
        <h2>{t("title")}</h2>

        <ul className="time-sidual">
          <li className="day">
            {t("weekdays")} <span>11.00-19.00</span>
          </li>
          <li className="day">
            {t("weekend")} <span>{t("closed")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
