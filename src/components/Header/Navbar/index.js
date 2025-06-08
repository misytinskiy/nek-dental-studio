"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import LocalizedLink from "@/components/LocalizedLink";

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");

  /* удобный префикс */
  const base = `/${locale}`;

  return (
    <div className="main-menu">
      <nav className="navigation">
        <ul className="nav menu">
          <li>
            <LocalizedLink
              href="/"
              className={pathname === base ? "active" : ""}
            >
              {t("home")}
            </LocalizedLink>
          </li>

          <li>
            <LocalizedLink
              href="/doctors"
              className={pathname === `${base}/doctors` ? "active" : ""}
            >
              {t("doctors")}
            </LocalizedLink>
          </li>

          <li>
            <LocalizedLink
              href="/service"
              className={pathname === `${base}/service` ? "active" : ""}
            >
              {t("services")}
            </LocalizedLink>
          </li>

          <li>
            <LocalizedLink
              href="/contact"
              className={pathname === `${base}/contact` ? "active" : ""}
            >
              {t("contact")}
            </LocalizedLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
