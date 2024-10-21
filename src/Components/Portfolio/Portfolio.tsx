"use client";
import React, { useState, useEffect } from "react";
import { WebDev } from "./PortfolioData";
import Button from "../Button/Button";
import AnimatedPortfolio from "./AnimatedPortfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useGetAllProjectQuery } from "@/Redux/Services/project";
import LoaderComponent from "../Loader/LoaderComponent";

interface Data {
  category: string;
  thumbnail: string;
  title: string;
  _id: string;
}

const Portfolio: React.FC = () => {
  const { isLoading, error, data } = useGetAllProjectQuery();
  const [projectData, setProjectData] = useState<Data[] | null>(null);

  useEffect(() => {
    if (data?.data) {
      setProjectData(data.data);
    }
  }, [data]);

  const categories = [
    { name: "All", category: "all" },
    { name: "Web", category: "webdevelopment" },
    { name: "Mobile", category: "appdevelopment" },
    { name: "Music", category: "music" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkill = (): {
    category: string;
    name: string;
    thumbnail: string;
    _id: string;
  }[] => {
    if (!projectData) {
      return [];
    }

    if (activeCategory === "all") {
      return projectData
        .filter((item) => item.category !== "music")
        .map(({ category, title: name, thumbnail, _id }) => ({
          category,
          name,
          thumbnail,
          _id,
        }));
    }

    return projectData
      .filter((item) => item.category === activeCategory)
      .map(({ category, title: name, thumbnail, _id }) => ({
        category,
        name,
        thumbnail,
        _id,
      }));
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center md:hidden">
        <LoaderComponent />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 40 }}
          className="flex flex-col md:px-10 px-5 md:h-[390px] md:w-[900px] bg-black overflow-hidden md:rounded-[50px] bg-opacity-90 md:bg-opacity-100  h-screen w-full overflow-y-scroll md:overflow-visible z-10 relative"
        >
          <h2 className="text-2xl font-semibold my-5 text-center">
            Presenting My{" "}
            <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
              Portfolio
            </span>
          </h2>
          <div className="md:grid  grid grid-cols-4 md:grid-cols-4 gap-2 mb-5 w-full">
            {categories.map((value, index) => (
              <Button
                key={index}
                text={value.name}
                onClick={() => setActiveCategory(value.category)}
                className={`border text-xs md:text-xs py-1 rounded-[5px] font-semibold  ${
                  activeCategory === value.category ? "bg-white text-black" : ""
                }`}
              />
            ))}
          </div>
          <AnimatedPortfolio filterSkill={filterSkill} />
          <div className="flex justify-start md:justify-end w-full mt-2 md:hidden ">
            <p className="text-sm md:text-xs font-serif italic text-gray-600 border-l-4 border-blue-500 pl-2 ml-2 mb-5 mr-2 mt-2 md:mt-0 ">
              "Let's talk on something great together."
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
