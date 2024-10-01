"use client";
import React, { useState } from "react";
import { WebDev } from "./PortfolioData";
import Button from "../Button/Button";
import AnimatedPortfolio from "./AnimatedPortfolio";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const categories = [
    { name: "All", category: "all" },
    { name: "Web/App ", category: "webdevelopment" },
    { name: "Graphic ", category: "graphicdesign" },
    { name: "Wordpress", category: "wordpress" },
    { name: "Marketing", category: "digitalmarketing" },
    { name: "Music ", category: "music" },
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
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
        transition={{ type: "spring", stiffness: 250, damping: 40 }}
        className="flex flex-col md:px-10 px-5   md:h-[390px] md:w-[900px] bg-black overflow-hidden md:rounded-[50px] h-screen w-full overflow-y-scroll md:overflow-visible"
      >
        <h2 className="text-2xl font-semibold my-5 text-center">
          Presenting My{" "}
          <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
            Portfolio
          </span>
        </h2>
        <div className="md:grid grid grid-cols-3 md:grid-cols-6 gap-2 mb-5 w-full ">
          {categories.map((value, index) => (
            <Button
              key={index}
              text={value.name}
              onClick={() => setActiveCategory(value.category)}
              className={`border text-xs md:text-xs py-1 rounded-[5px] font-semibold ${
                activeCategory === value.category ? "bg-white text-black" : ""
              }`}
            />
          ))}
        </div>
        <AnimatedPortfolio filterSkill={filterSkill} />
      </motion.div>
    </>
  );
};

export default Portfolio;
