import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile from "../../Assets/ProfileImg/profile.jpg";

const CarouselComp = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className=" flex justify-center items-center  ">
        <Carousel
          responsive={responsive}
          // autoPlay={true}
          // autoPlaySpeed={1000}
          // infinite={true}
          // transitionDuration={3000}
          containerClass={`w-full`}
        >
          <div className="w-full flex justify-center items-center mt-5 ">
            <div className=" h-[280px] w-full flex justify-center items-center">
              <div className="w-4/5 bg-slate-700 flex items-center  h-[90%] rounded-2xl flex-col">
                <div className=" w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center  border relative bottom-4 ">
                  <Image
                    src={profile}
                    alt="profile"
                    width={200}
                    height={200}
                    style={{ objectFit: "cover" }}
                    className="rounded-full "
                    priority
                  />
                </div>
                <div className="text-center text-sm mb-2">
                  <h3 className="text-lg font-semibold">Roshan Sharma</h3>
                  <p>Digital Marketer</p>
                </div>
                <p className="px-4 text-center text-xs mb-2">
                  "Web Summit will increase your appetite, your inspiration,
                  your skills, your motivation and your network."
                </p>
                <p>Stars</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
