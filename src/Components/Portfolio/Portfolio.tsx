"use client";
import React, { useState } from "react";
import { WebDev } from "./PortfolioData";
import Button from "../Button/Button";
import Image from "next/image";

const Portfolio: React.FC = () => {
  const categories = [
    { name: "All", category: "all" },
    { name: "Web/App Dev", category: "webdevelopment" },
    { name: "Graphic Designing", category: "graphicdesign" },
    { name: "Wordpress", category: "wordpress" },
    { name: "Digital Marketing", category: "digitalmarketing" },
    { name: "Music Creations", category: "music" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkill = () => {
    if (activeCategory === "all") {
      return WebDev;
    }
    return WebDev.filter((item) => item.category === activeCategory);
  };

  return (
    <>
      <div className="flex flex-col px-3  ">
        <h2 className="text-2xl font-semibold mb-5 text-center ">Portfolio</h2>
        <div className="grid md:grid-cols-6 grid-cols-3  gap-2 mb-5 ">
          {categories.map((value, index) => (
            <Button
              key={index}
              text={value.name}
              onClick={() => setActiveCategory(value.category)}
              className={`border text-xxs md:text-xs py-1  rounded-[5px] font-semibold ${
                activeCategory === value.category ? "bg-white text-black" : ""
              }`}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md md:max-h-[250px] md:overflow-auto scrollbar-hide   gap-3  ">
          {filterSkill().map((value, index) => (
            <div key={index} className="rounded-2xl">
              <Image
                src={value.image}
                width={200}
                height={200}
                alt="Niraj Portfolio"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
