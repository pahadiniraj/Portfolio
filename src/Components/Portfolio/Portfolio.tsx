"use client";
import React, { useState, useEffect } from "react"; // Import useEffect
import { WebDev } from "./PortfolioData";
import Button from "../Button/Button";
import AnimatedPortfolio from "./AnimatedPortfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useGetAllProjectQuery } from "@/Redux/Services/project";

interface CreatedBy {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
}

// Define the main interface for the project data
interface Data {
  category: string;
  createdAt: string; // You may consider using Date type if you parse it
  createdBy: CreatedBy;
  description: string;
  features: string[]; // Array of strings
  githubLink: string;
  image: string;
  liveDemoLink: string;
  technologies: string[]; // Array of strings
  thumbnail: string;
  title: string;
  updatedAt: string; // You may consider using Date type if you parse it
  __v: number; // Assuming this is a version number
  _id: string; // Unique identifier for the project
}

const Portfolio: React.FC = () => {
  const { isLoading, error, data } = useGetAllProjectQuery(); // Added error handling
  const [projectData, setProjectData] = useState<Data[] | null>(null); // Define state type

  useEffect(() => {
    // Set project data when data is available
    if (data?.data) {
      setProjectData(data.data); // Access the array of Data objects
    }
  }, [data]); // Add data to dependency array

  const categories = [
    { name: "All", category: "all" },
    { name: "Web/App", category: "webdevelopment" },
    { name: "Graphic", category: "graphicdesign" },
    { name: "Wordpress", category: "wordpress" },
    { name: "Marketing", category: "digitalmarketing" },
    { name: "Music", category: "music" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkill = () => {
    if (activeCategory === "all") {
      return WebDev;
    }
    return WebDev.filter((item) => item.category === activeCategory);
  };

  // Show loading or error message if applicable
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading projects.</div>;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100vw", filter: "blur(20px)" }}
          transition={{ type: "spring", stiffness: 250, damping: 40 }}
          className="flex flex-col md:px-10 px-5 md:h-[390px] md:w-[900px] bg-black overflow-hidden md:rounded-[50px] h-screen w-full overflow-y-scroll md:overflow-visible z-10 relative"
        >
          <h2 className="text-2xl font-semibold my-5 text-center">
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
                className={`border text-xs md:text-xs py-1 rounded-[5px] font-semibold ${
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
