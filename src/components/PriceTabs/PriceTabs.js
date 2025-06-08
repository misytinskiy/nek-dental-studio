"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useTranslations } from "next-intl";
import "react-tabs/style/react-tabs.css";
import PriceTable from "../PriceTable/PriceTable";
import priceData from "./priceData";

export default function PriceTabs() {
  const t = useTranslations("departments");
  const categories = Object.keys(priceData);

  return (
    <Tabs selectedTabClassName="react-tabs__tab--selected custom-selected">
      <TabList>
        {categories.map((cat, idx) => (
          <Tab key={cat}>{t(`${idx}.title`)}</Tab>
        ))}
      </TabList>

      {categories.map((cat) => (
        <TabPanel key={cat}>
          <PriceTable data={priceData[cat]} />
        </TabPanel>
      ))}
    </Tabs>
  );
}
