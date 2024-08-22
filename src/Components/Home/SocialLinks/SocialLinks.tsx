import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  const data = [
    {
      url: "https://www.facebook.com/profile.php?id=100089208278456",
      icon: <FaFacebookSquare />,
    },
    {
      url: "https://github.com/pahadiniraj",
      icon: <FaSquareGithub />,
    },
    {
      url: "https://www.linkedin.com/in/niraj-pahadi-733147292/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <div className="flex items-end mb-1 ml-2">
      <ul className="flex gap-2">
        {data.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white text-[23px] group "
            >
              {item.icon}
              <span className="absolute top-7  left-0 w-0 h-0.5 rounded-sm bg-white transition-all duration-300 ease-in-out group-hover:w-full " />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
