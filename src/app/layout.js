import Script from "next/script";

import ScrollTop from "@/components/ScrollTop";

import Preloader from "@/components/Preloader";
import { Poppins } from "next/font/google";

// Bootstrap CSS
import "../../public/css/bootstrap.min.css";

// Fontawesome CSS
import "../../public/css/font-awesome.min.css";

// Icofont CSS
import "../../public/css/icofont.css";

// Animate CSS
import "animate.css";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Modal Video CSS
import "react-modal-video/css/modal-video.min.css";

// Global CSS
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nek Dental Studio",
  description:
    "Modern dental clinic in the heart of Tbilisi, specializing in providing high-quality dental services.",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}>
        <>
          <Preloader />
          {/* <ColorLayout /> */}
          {children}
          <ScrollTop />
          <Script src="/js/bootstrap.min.js"></Script>
        </>
      </body>
    </html>
  );
}
