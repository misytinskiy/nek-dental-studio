"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import useStickyHeader from "./useStickyHeader";

import Logo from "../Logo";
import Navbar from "../Navbar";
import MobileOffcanvas from "@/components/MobileOffcanvas";

export default function HeaderInner() {
  const { isSticky } = useStickyHeader();
  const t = useTranslations("nav");

  return (
    <div className={`header-inner ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="inner">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-3 col-12 mobile-menu-sticky align-items-center">
              <Logo />
              <MobileOffcanvas />
            </div>

            <div className="col-lg-7 col-md-9 col-12">
              <Navbar />
            </div>

            <div className="col-lg-2 col-12 align-items-center">
              <div className="get-quote">
                <Link
                  href="https://api.whatsapp.com/send/?phone=995596330303"
                  className="btn"
                >
                  {t("appointment")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
