"use client";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function LocalizedLink({ href, ...props }) {
  const locale = useLocale();
  const fullPath = href === "/" ? `/${locale}` : `/${locale}${href}`;
  return <Link href={fullPath} className={`no-underline`} {...props} />;
}
