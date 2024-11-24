import Button from "@/Components/Button/Button";
import React, { useState } from "react";
import { skillsData } from "../SkillsData/SkillData";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiGraphql,
  SiJest,
  SiTailwindcss,
  SiVercel,
  SiCypress,
  SiStyledcomponents,
  SiGithubactions,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

const Skills: React.FC = () => {
  const categories = [
    // { name: "Main Skills", category: "skills" },
    { name: "Knowledge-On", category: "education" },
  ];

  const fullstackDeveloperKnowledge = [
    { skill: "HTML", icon: <FaHtml5 />, description: "HTML5" },
    { skill: "CSS", icon: <FaCss3Alt />, description: "CSS3, Flexbox, Grid" },
    { skill: "JavaScript", icon: <FaJs />, description: "JavaScript (ES6+)" },
    {
      skill: "React.js",
      icon: <FaReact />,
      description: "Frontend library for building UIs",
    },
    {
      skill: "Next.js",
      icon: <SiNextdotjs />,
      description: "React framework for server-side rendering",
    },
    {
      skill: "Styled-components",
      icon: <SiStyledcomponents />,
      description: "CSS-in-JS for styling components",
    },
    {
      skill: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: "Utility-first CSS framework",
    },
    {
      skill: "TypeScript",
      icon: <SiTypescript />,
      description: "Typed JavaScript",
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs />,
      description: "JavaScript runtime for backend",
    },
    {
      skill: "Express.js",
      icon: <SiExpress />,
      description: "Node.js web framework",
    },
    { skill: "MongoDB", icon: <SiMongodb />, description: "NoSQL database" },
    {
      skill: "PostgreSQL/MySQL",
      icon: <SiPostgresql />,
      description: "SQL databases",
    },
    {
      skill: "JWT Authentication",
      icon: "🔒",
      description: "Token-based authentication",
    },
    {
      skill: "Redux",
      icon: <SiRedux />,
      description: "State management with Redux Toolkit",
    },
    {
      skill: "REST API",
      icon: <FaServer />, // Replace this with the appropriate icon for REST API
      description: "Standardized architecture for web services",
    },
    {
      skill: "Jest",
      icon: <SiJest />,
      description: "JavaScript testing framework",
    },
    {
      skill: "Cypress",
      icon: <SiCypress />,
      description: "End-to-end testing framework",
    },
    {
      skill: "GitHub Actions",
      icon: <SiGithubactions />,
      description: "CI/CD pipeline",
    },
    {
      skill: "Docker",
      icon: <FaDocker />,
      description: "Containerization platform",
    },
    {
      skill: "Vercel/Netlify",
      icon: <SiVercel />,
      description: "Frontend deployment platforms",
    },
    {
      skill: "AWS/Heroku",
      icon: <FaAws />,
      description: "Cloud platforms for hosting applications",
    },
    {
      skill: "UI/UX Design",
      icon: <SiFigma />,
      description: "User interface and experience design (Figma, Adobe XD)",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("education");
  const [showAll, setShowAll] = useState(false);

  const renderSkills = () => {
    const skillsToShow = showAll ? skillsData : skillsData.slice(0, 2);
    return skillsToShow.map((value, index) => (
      <div key={index} className="mb-3 pr-5">
        <div className="font-semibold">{value.name}</div>
        {value.line1}
        {value.line2}
      </div>
    ));
  };

  const renderEducation = () => {
    return fullstackDeveloperKnowledge.map((value, index) => (
      <div
        key={index}
        className="flex items-center gap-4 border-b border-gray-200 p-2"
      >
        <span className="text-2xl">{value.icon}</span>
        <div>
          <div className="font-bold">{value.skill}</div>
          <div className="text-gray-500 text-sm">{value.description}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-3 p-2 md:p-0">
      <div className="flex gap-3  items-start justify-start mb-2">
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
        {/* {activeCategory === "skills" && renderSkills()} */}
        {/* {activeCategory === "skills" && skillsData.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className={`text-xs font-bold mt-2 transition duration-300 ease-linear active:scale-90 ${
              showAll ? "text-blue-500" : "text-white"
            }`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )} */}

        {activeCategory === "education" && renderEducation()}
      </div>
    </div>
  );
};

export default Skills;
