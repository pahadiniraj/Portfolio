import React from "react";
import CarouselComp from "./CarouselComp";

const Testimonial = () => {
  return (
    <div>
      <p className="text-center font-semibold text-lg">
        Your <span className="text-purple-500">Trusted</span> companion
      </p>
      <p className="text-xs text-center  font-thin ">
        Empowering business with Technology
      </p>
      <CarouselComp />
    </div>
  );
};

export default Testimonial;
