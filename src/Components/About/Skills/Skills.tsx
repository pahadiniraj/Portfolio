import Button from "@/Components/Button/Button";
import React, { useState } from "react";
import { skillsData } from "../SkillsData/SkillData";

const Skills: React.FC = () => {
  const categories = [
    { name: "Main Skills", category: "skills" },
    { name: "Education", category: "education" },
    { name: "Awards", category: "awards" },
  ];

  const educationData = [
    { name: "Bachelor's Degree in Computer Science" },
    { name: "Master's Degree in Software Engineering" },
  ];

  const awardsData = [
    { name: "Best Developer Award 2021" },
    { name: "Top 10% Developer 2021" },
  ];

  const [activeCategory, setActiveCategory] = useState("skills");
  const [showAll, setShowAll] = useState(false);

  const renderSkills = () => {
    const skillsToShow = showAll ? skillsData : skillsData.slice(0, 2);
    return skillsToShow.map((value, index) => (
      <div key={index} className="mb-3">
        <div className="font-semibold">{value.name}</div>
        {value.line1}
        {value.line2}
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-3 p-2 md:p-0">
      <div className="flex gap-5 justify-center items-center md:items-start md:justify-start mb-2 ">
        {categories.map((value, index) => (
          <Button
            key={index}
            onClick={() => setActiveCategory(value.category)}
            className={`text-sm font-bold  border p-2 rounded-md ${
              activeCategory === value.category
                ? "bg-white text-black"
                : "text-white"
            }`}
          >
            {value.name}
          </Button>
        ))}
      </div>

      <div>
        {activeCategory === "skills" && renderSkills()}
        {activeCategory === "skills" && skillsData.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={`text-xs font-bold mt-2 transition duration-300 ease-linear active:scale-90 ${
              showAll ? "text-blue-500" : "text-white"
            }`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
        {activeCategory === "education" &&
          educationData.map((value, index) => (
            <div key={index}>{value.name}</div>
          ))}
        {activeCategory === "awards" &&
          awardsData.map((value, index) => <div key={index}>{value.name}</div>)}
      </div>
    </div>
  );
};

export default Skills;
