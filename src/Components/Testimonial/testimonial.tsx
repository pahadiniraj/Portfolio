import React from "react";
import CarouselComp from "./CarouselComp";

const Testimonial = () => {
  return (
    <div>
      <p className="text-center font-semibold">
        Trusted By <span className="text-purple-500">1k+</span> Clients
      </p>
      <p className="text-xs text-center font-pacifico">
        Empowering business with Technology
      </p>
      <CarouselComp />
    </div>
  );
};

export default Testimonial;
