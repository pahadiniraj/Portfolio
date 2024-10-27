"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HoverBorderGradientDemo } from "@/Components/UI/Components/HoverGradientComp";
import { useRouter } from "next/navigation";
import AlertButton from "@/Components/Auth/Login/LoginButton";
import { useGetUserQuery } from "@/Redux/Services/user";
import ClipLoader from "react-spinners/ClipLoader";

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 2,
    y: 0,
    transition: {
      delay: index * 0.3,
      duration: 0.7,
      ease: "easeOut",
      bounce: 0.3,
    },
  }),
};

const SocialLinks: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const router = useRouter();
  const { isLoading, data: userData } = useGetUserQuery();

  useEffect(() => {
    if (userData) {
      setIsVerified(userData?.user?.isVerified);
    }
  }, [userData]);

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
    <div className="flex items-end mb-1 ml-2 gap-4">
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
      {isLoading ? (
        <ClipLoader color="#FFFFFF" loading={true} size={25} />
      ) : isVerified ? (
        <div
          className="relative top-1 duration-300 active:scale-90"
          onClick={() => router.push("/dashboard/setting")}
        >
          <HoverBorderGradientDemo />
        </div>
      ) : (
        <AlertButton
          text="Login"
          color1="#FF0000"
          color2="#261616"
          color3="#088e2c"
        />
      )}
    </div>
  );
};

export default SocialLinks;
