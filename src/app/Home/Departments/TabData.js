"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import DepartmentImg1 from "../../../../public/img/therapy.jpg";
import DepartmentImg2 from "../../../../public/img/implantology.JPG";
import DepartmentImg3 from "../../../../public/img/orthopedics.JPG";
import DepartmentImg4 from "../../../../public/img/orthodontics.JPG";
import DepartmentImg5 from "../../../../public/img/surgery.PNG";
import DepartmentImg6 from "../../../../public/img/pediatrics.JPG";

const departments = [
  {
    id: 1,
    icon: "icofont-stethoscope", // Therapy
    title: "Therapy",
    content:
      "Experience comprehensive dental therapy services, focusing on preventing, diagnosing, and treating oral diseases. Our personalized treatments ensure long-term dental health.",
    image: DepartmentImg1,
  },
  {
    id: 2,
    icon: "icofont-tooth", // Implantology
    title: "Implantology",
    content:
      "Transform your smile with our state-of-the-art dental implants. From single tooth replacements to full arch restorations, we provide solutions that look, feel, and function like natural teeth.",
    image: DepartmentImg2,
  },
  {
    id: 3,
    icon: "icofont-bone", // Orthopedics / prosthetics
    title: "Orthopedics",
    content:
      "Discover the perfect blend of function and aesthetics with our dental orthopedic services. We specialize in correcting dental and jaw irregularities, ensuring optimal oral health and appearance.",
    image: DepartmentImg3,
  },
  {
    id: 4,
    icon: "icofont-xray", // Orthodontics – рентген/диагностика
    title: "Orthodontics",
    content:
      "Achieve a perfectly aligned smile with our orthodontic services. We offer a variety of braces and aligners to suit every age and lifestyle, guiding your teeth into their ideal position.",
    image: DepartmentImg4,
  },
  {
    id: 5,
    icon: "icofont-surgeon-alt", // Surgery
    title: "Surgery",
    content:
      "Trust our expert team for all your oral surgery needs. From wisdom tooth extractions to corrective jaw surgery, we provide safe, effective treatments to address complex dental issues.",
    image: DepartmentImg5,
  },
  {
    id: 6,
    icon: "icofont-baby-milk-bottle", // Pediatrics
    title: "Pediatrics",
    content:
      "Making dental care fun and fearless for our youngest patients. Our children's dentistry services focus on prevention, education, and gentle treatment to ensure a lifetime of healthy smiles.",
    image: DepartmentImg6,
  },
];

export default function TabData() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Tabs className="department-tab">
        <TabList id="myTab" className="nav nav-tabs">
          {departments.map((department) => (
            <Tab
              key={department.id}
              onClick={() => handleTabClick(departments.indexOf(department))}
            >
              <i className={department.icon}></i>
              <span className="first">{department.title}</span>
            </Tab>
          ))}
        </TabList>
        <div className="tab-content" id="myTabContent">
          {departments.map((department, index) => (
            <TabPanel
              key={department.id}
              className={selectedTab === index ? "active show" : ""}
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="department-left">
                    <p>{department.content}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="department-right">
                    <Image
                      src={department.image}
                      alt="#"
                      width={450}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
}
