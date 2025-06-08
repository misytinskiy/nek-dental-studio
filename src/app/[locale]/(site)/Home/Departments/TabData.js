"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslations } from "next-intl";

import DepartmentImg1 from "../../../../../../public/img/therapy.jpg";
import DepartmentImg2 from "../../../../../../public/img/implantology.JPG";
import DepartmentImg3 from "../../../../../../public/img/orthopedics.JPG";
import DepartmentImg4 from "../../../../../../public/img/orthodontics.JPG";
import DepartmentImg5 from "../../../../../../public/img/surgery.PNG";
import DepartmentImg6 from "../../../../../../public/img/pediatrics.JPG";

const IMAGES = [
  DepartmentImg1,
  DepartmentImg2,
  DepartmentImg3,
  DepartmentImg4,
  DepartmentImg5,
  DepartmentImg6,
];

export default function TabData() {
  const t = useTranslations("departments");
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tabs className="department-tab">
      <TabList id="myTab" className="nav nav-tabs">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Tab key={idx} onClick={() => setSelectedTab(idx)}>
            <i className={t(`${idx}.icon`)}></i>
            <span className="first">{t(`${idx}.title`)}</span>
          </Tab>
        ))}
      </TabList>

      <div className="tab-content" id="myTabContent">
        {Array.from({ length: 6 }).map((_, idx) => (
          <TabPanel
            key={idx}
            className={selectedTab === idx ? "active show" : ""}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="department-left">
                  <p>{t(`${idx}.text`)}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="department-right">
                  <Image src={IMAGES[idx]} alt="" width={450} height={300} />
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
}
