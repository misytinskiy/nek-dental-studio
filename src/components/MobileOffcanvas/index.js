"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Offcanvas } from "react-bootstrap";

import Logo from "../../../public/img/logo.png";
import LocalizedLink from "@/components/LocalizedLink";
import { useTranslations, useLocale } from "next-intl";

export default function MobileOffcanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const base = `/${locale}`;

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/doctors", label: t("doctors") },
    { href: "/service", label: t("services") },
    { href: "/contact", label: t("contact") },
  ];

  const isActive = (href) =>
    pathname === (href === "/" ? base : `${base}${href}`);

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="mobile-menu-offcanvas-toggler"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>

      <Offcanvas show={show} onHide={handleClose} className="mobile-menu-modal">
        <div className="modal-dialog offcanvas-dialog">
          <div className="modal-content">
            <div className="modal-header offcanvas-header">
              <div className="offcanvas-logo">
                <LocalizedLink href="/">
                  <Image src={Logo} alt="Logo" width={134} height={50} />
                </LocalizedLink>
              </div>
              <button type="button" className="btn-close" onClick={handleClose}>
                <i className="fa fa-times" />
              </button>
            </div>

            <div className="mobile-menu-modal-main-body">
              <nav className="navigation offcanvas-menu">
                <ul className="list-none offcanvas-men-list">
                  {navItems.map(({ href, label }) => (
                    <li key={href}>
                      <LocalizedLink
                        href={href}
                        onClick={handleClose}
                        className={isActive(href) ? "active" : ""}
                      >
                        {label}
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mobile-menu-modal-bottom">
              <LocalizedLink
                href="/appointment"
                className="btn"
                onClick={handleClose}
              >
                Appointment
              </LocalizedLink>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>
  );
}
