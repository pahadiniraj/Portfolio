"use client"
import React, { useState } from "react";
import { WebDev } from "./PortfolioData";
import Button from "../Button/Button";
import Image from "next/image";
import AnimatedPortfolio from "./AnimatedPortfolio";

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
      <div className="flex flex-col md:px-10 px-5 mt-5 w-full">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Presenting My{" "}
          <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
            Portfolio
          </span>
        </h2>
        <div className="md:grid grid grid-cols-3 md:grid-cols-6 gap-2 mb-5 w-full">
          {categories.map((value, index) => (
            <Button
              key={index}
              text={value.name}
              onClick={() => setActiveCategory(value.category)}
              className={`border text-xxs md:text-xs py-1 rounded-[5px] font-semibold ${
                activeCategory === value.category ? "bg-white text-black" : ""
              }`}
            />
          ))}
        </div>
        <AnimatedPortfolio filterSkill={filterSkill} />
      </div>
    </>
  );
};

export default Portfolio;
