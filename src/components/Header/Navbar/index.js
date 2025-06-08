"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="main-menu">
        <nav className="navigation">
          <ul className="nav menu">
            <li>
              <Link href="/">
                Home <i className=""></i>
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/doctors" ? "active" : ""}`}
                href="/doctors"
              >
                Doctor
              </Link>
            </li>
            <li>
              <Link
                className={` ${pathname === "/service" ? "active" : ""}`}
                href="/service"
              >
                Service
              </Link>
            </li>

            <li>
              <Link
                className={` ${pathname === "/contact" ? "active" : ""}`}
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
