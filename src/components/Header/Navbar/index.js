"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <div className="main-menu">
      <nav className="navigation">
        <ul className="nav menu">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>

          <li>
            <Link
              href="/doctors"
              className={pathname === "/doctors" ? "active" : ""}
            >
              {t("doctors")}
            </Link>
          </li>

          <li>
            <Link
              href="/service"
              className={pathname === "/service" ? "active" : ""}
            >
              {t("services")}
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              {t("contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
