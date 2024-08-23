import React from "react";
import { StickyScrollRevealDemo } from "../UI/Components/StickyScrollComp";

const WhyMe = () => {
  return (
    <>
      <div className="">
        <div className="text-center mt-5">
          <h3 className="text-2xl font-semibold px-4  ">
            Comprehensive{" "}
            <span className="py-1 px-2 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
              Solutions
            </span>
          </h3>
        </div>
        <div className="w-full">
          <StickyScrollRevealDemo />
        </div>
      </div>
    </>
  );
};

export default WhyMe;
