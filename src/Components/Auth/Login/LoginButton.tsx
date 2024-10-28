import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface AlertButtonProps {
  text: string;
  color1: string;
  color2: string;
  color3: string;
}

const AlertButton: React.FC<AlertButtonProps> = ({
  text,
  color1,
  color2,
  color3,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="mt-2">
        <button
          className={` font-bold   text-white right-2 `}
          onClick={() => (window.location.href = "/login")}
        >
          <motion.div
            animate={{
              y: [0, -10, 0, 10, 0], // Bell-like up and down movement
              rotate: [0, -10, 10, -10, 10, 0], // Gentle rotation to mimic a bell's motion
              scale: [1, 1.1, 1], // Slight scale up to mimic vibration
              backgroundColor: [`${color1}`, `${color2}`, `${color3}`], // Flash red and white like an alarm
            }}
            transition={{
              duration: 0.5, // Fast shake
              repeat: Infinity, // Loop the animation
              repeatType: "loop", // Loop type
              ease: "easeInOut", // Smooth easing
              repeatDelay: 3, // Delay between shakes
            }}
            whileHover={{ scale: 1.1 }} // Slightly scale up on hover
            className="px-2 py-1 rounded-md text-xs"
          >
            {text}
          </motion.div>
        </button>
      </div>
    </>
  );
};

export default AlertButton;
