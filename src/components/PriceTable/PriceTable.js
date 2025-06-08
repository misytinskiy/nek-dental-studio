"use client";

import { useTranslations } from "next-intl";
import "./price-table.css";

export default function PriceTable({ data }) {
  const t = useTranslations("prices");

  return (
    <div className="table-responsive price-table">
      <table className="table table-hover custom-price-table">
        <thead>
          <tr>
            <th style={{ width: "75%" }}>{t("head.service")}</th>
            <th className="text-end" style={{ width: "25%" }}>
              {t("head.price")}
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ key, price }) => (
            <tr key={key}>
              <td>{t(key)}</td>
              <td className="text-end">{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
