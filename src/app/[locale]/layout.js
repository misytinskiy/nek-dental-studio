import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [{ locale: "ka" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
