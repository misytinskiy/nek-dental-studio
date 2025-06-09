import Image from "next/image";
import Link from "next/link";

import ThemeLogo from "../../../../public/img/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/" className="d-flex align-items-center logo-link">
        <Image
          src={ThemeLogo}
          alt="Nek Dental Studio"
          width={160}
          height={120}
          priority
        />
        {/* <span className="logo-text">Nek&nbsp;Dental&nbsp;Studio</span> */}
      </Link>
    </div>
  );
}
