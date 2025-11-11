import Image from "next/image";
import React from "react";
import "react-multi-carousel/lib/styles.css";

const CarouselComp = () => {
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="w-full flex justify-center items-center mt-5">
        <div className="h-[280px] w-full flex justify-center items-center">
          <div className="relative w-full h-full  overflow-hidden">
            <Image
              src="/tech.avif"
              alt="tech world"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComp;
