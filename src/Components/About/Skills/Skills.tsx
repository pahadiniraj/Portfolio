import React, { useState } from "react";

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
    // const skillsToShow = showAll ? skillsData : skillsData.slice(0, 2);
  };

  return <div>Skills</div>;
};

export default Skills;
