import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LoginButton from "@/Components/Auth/Login/LoginButton";
import Cookies from "js-cookie";
import { HoverBorderGradientDemo } from "@/Components/UI/Components/HoverGradientComp";
import { useRouter } from "next/navigation";

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 2, // Increased scale for the pop effect
    y: 0,
    transition: {
      delay: index * 0.3, // Staggered delay for each icon
      duration: 0.7,
      ease: "easeOut",
      bounce: 0.3,
    },
  }),
};

const SocialLinks: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const router = useRouter();

  // Check the cookie only on the client side
  useEffect(() => {
    const verified = Cookies.get("isVerified");
    setIsVerified(verified === "true");
  }, []);

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

  // If the client-side state has not been set yet, don't render until it's ready
  if (isVerified === null) {
    return null; // Or a loader if you'd like
  }

  return (
    <div className="flex items-end mb-1 ml-2 gap-4 ">
      <ul className="flex gap-2" ref={ref}>
        {data.map((item, index) => (
          <li key={index}>
            <motion.a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white text-[23px] group"
              variants={iconVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              {item.icon}
              <span className="absolute top-7 left-0 w-0 h-0.5 rounded-sm bg-white transition-all duration-300 ease-in-out group-hover:w-full" />
            </motion.a>
          </li>
        ))}
      </ul>
      {isVerified ? (
        <div
          className="relative top-1 duration-300 active:scale-90"
          onClick={() => router.push("/dashboard")}
        >
          <HoverBorderGradientDemo />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default SocialLinks;
