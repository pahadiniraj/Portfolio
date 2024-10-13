import React from "react";

const LoaderComponent = () => {
  return (
    <div className="">
      <div
        data-glitch="Loading..."
        className="relative text-white font-bold text-[25px] tracking-widest z-[1] animate-shift glitch"
      >
        NirajCodes
        <span className="absolute top-0 left-0 opacity-80 text-[#8b00ff] z-[-1] animate-glitch glitch-before">
          NirajCodes
        </span>
        <span className="absolute top-0 left-0 opacity-80 text-[#00e571] z-[-2] animate-glitch glitch-after">
          NirajCodes
        </span>
      </div>
    </div>
  );
};

export default LoaderComponent;
