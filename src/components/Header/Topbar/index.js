"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Topbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (lng) => {
    const segments = pathname.split("/");
    segments[1] = lng;
    router.replace(segments.join("/"));
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-5 col-12 d-flex gap-2">
            <button
              className={`lang-btn ${locale === "ka" ? "active" : ""}`}
              onClick={() => switchLocale("ka")}
            >
              KA
            </button>
            <button
              className={`lang-btn ${locale === "en" ? "active" : ""}`}
              onClick={() => switchLocale("en")}
            >
              EN
            </button>
          </div>

          <div className="col-lg-6 col-md-7 col-12">
            <ul className="top-contact">
              <li>
                <i className="fa fa-phone"></i>+(995) 596 33 03 03
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <Link href="mailto:nekdentalstudio@gmail.com">
                  nekdentalstudio@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
