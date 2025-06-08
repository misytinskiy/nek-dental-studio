"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PriceTable from "../PriceTable/PriceTable";

const priceData = {
  Therapy: [
    { service: "Scaling", price: "100₾" },
    { service: "Complex cleaning", price: "200₾" },
    { service: "Cleaning AIRFLOW", price: "100₾" },
    { service: "Repeated deep cleaning (perio)", price: "100₾" },
    { service: 'Gum treatment with "Vector" device', price: "750₾" },
    { service: "Dental Visiography (Dental X-ray)", price: "6₾" },
    { service: "Root canal treatment", price: "100₾" },
    { service: "Periodontitis", price: "250₾" },
    { service: "Placing healing views in canals (1 canal)", price: "15₾" },
    { service: "Maryland bridge", price: "350₾" },
    {
      service: "Treatment of the caricature cavity (imprint method)",
      price: "50₾",
    },
    { service: "Raberdam system", price: "15₾" },
    { service: "Rectractor", price: "15₾" },
    { service: "Caries", price: "180₾" },
    { service: "Restoration (therapeutic veneer)", price: "200₾" },
    { service: "Restoration with mocaf", price: "200₾" },
    { service: "Silicone key", price: "85₾" },
    { service: "Cult (under the crown)", price: "60₾" },
    { service: "Endo whitening", price: "60₾" },
    { service: 'Tooth whitening with "caps"', price: "550₾" },
  ],

  Implantology: [
    { service: '"ROOT" (Switzerland)', price: "10000₾" },
    { service: '"MIS SEVEN" (America)', price: "10000₾" },
    { service: '"STRAUMANN" (Switzerland)', price: "22000₾" },
    { service: '"MIS CI" (America)', price: "13000₾" },
    { service: '"SWEDEN&MARTINA" (Italy)', price: "3840₾" },
    { service: "Gum correction (per scale)", price: "200-800₾" },
    { service: "Open sinus-lifting", price: "25000₾" },
    { service: "Closed sinus-lifting", price: "17000₾" },
    { service: "Bone augmentation (by quantity)", price: "450-750₾" },
    { service: "Soft-tissue augmentation (per scale)", price: "150-450₾" },
    { service: "Temporary abutment with teeth", price: "250₾" },
    { service: "Gum shaper", price: "70₾" },
    { service: 'Surgical "Template" partial', price: "250₾" },
    { service: 'Surgical "Template" (1 jaw)', price: "350₾" },
  ],

  Orthopedics: [
    { service: "Ceramic veneer", price: "550₾" },
    { service: "Zirconia ceramic crown", price: "500₾" },
    { service: "Metal ceramic crown", price: "250₾" },
    { service: "Metal ceramic on implant (with fixation)", price: "450₾" },
    { service: "Zircon ceramic on implant (bolted)", price: "650₾" },
    { service: "Micro plate prosthesis", price: "150₾" },
    { service: "Removable prosthesis (1 jaw)", price: "500₾" },
    { service: "Bugle prosthesis (1 jaw)", price: "1300₾" },
    { service: "Valplast prosthesis (1 jaw)", price: "1000₾" },
    { service: "Temporary tooth (1 unit)", price: "70₾" },
    { service: "Temporary teeth (2 +)", price: "50₾" },
    { service: "Metal insert", price: "150₾" },
    { service: "Zircon insert", price: "200₾" },
    { service: "Arced prosthesis with MK lock (1 jaw)", price: "6000₾" },
    {
      service: "Arced prosthesis with rubber attachments (1 jaw)",
      price: "4500₾",
    },
  ],

  Orthodontics: [
    { service: 'System of braces "DAMON Q"', price: "3200₾" },
    { service: 'System of braces "DAMON CLEAR"', price: "4200₾" },
    { service: 'System of braces "AMERIKAN ORTHODONTICS"', price: "2000₾" },
    { service: 'System of braces "ORMCO"', price: "1500₾" },
    { service: 'System of braces "INSPIRE ICE"', price: "2200₾" },
    { service: "Correction of standard system of braces", price: "40₾" },
    { service: "Correction of Damon system of braces", price: "60₾" },
    { service: "Attaching the braces", price: "25₾" },
    { service: "Attachment of lost braces (standard)", price: "30₾" },
    { service: "Attachment of missing braces (Damon)", price: "60₾" },
    { service: "Retainer (1 jaw)", price: "120₾" },
    { service: "Retainer cap", price: "120₾" },
    { service: "MINI implant", price: "250₾" },
    { service: "Myobrace", price: "450₾" },
  ],

  Surgery: [
    { service: "Regional anesthesia", price: "20₾" },
    { service: "Infiltrative anesthesia", price: "15₾" },
    { service: "Extraction", price: "50₾" },
    { service: "Complicated tooth extraction", price: "80-100₾" },
    { service: "Root extraction", price: "40₾" },
    { service: "8th tooth extraction", price: "120₾" },
    { service: "8th tooth retention (dystopia)", price: "250-450₾" },
    { service: "Exostosis section", price: "50₾" },
    { service: "Abscess removal", price: "60₾" },
    { service: "Curettage", price: "40₾" },
    { service: "Suturing", price: "25₾" },
  ],

  Pediatrics: [
    { service: "Cleaning", price: "150₾" },
    { service: "Caries", price: "70₾" },
    { service: "Pulpit", price: "80₾" },
    { service: "Periodontitis", price: "90₾" },
    { service: "Sealing fissures", price: "70₾" },
    { service: "Milk tooth extraction", price: "30₾" },
    { service: "Frenulum correction", price: "200₾" },
  ],
};

export default function PriceTabs() {
  const categories = Object.keys(priceData);

  return (
    <Tabs selectedTabClassName="react-tabs__tab--selected custom-selected">
      <TabList>
        {categories.map((category) => (
          <Tab key={category}>{category}</Tab>
        ))}
      </TabList>

      {categories.map((category) => (
        <TabPanel key={category}>
          <PriceTable data={priceData[category]} />
        </TabPanel>
      ))}
    </Tabs>
  );
}
