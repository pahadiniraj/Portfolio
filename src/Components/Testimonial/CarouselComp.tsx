import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import profile from "../../Assets/ProfileImg/profile.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useGetAllTestimonialsQuery } from "@/Redux/Services/testimonial";
import StarRating from "./StarRating";
import ClipLoader from "react-spinners/ClipLoader";

// Define User interface
interface User {
  firstName: string;
  lastName: string;
  jobTitle: string;
  _id: string;
  avatar?: string;
}

// Define Data interface
interface Data {
  message: string;
  rating: number;
  user: User;
  _id: string;
}

// Define GetResponse interface where data is an array of Data
export interface GetResponse {
  data: Data[]; // Change this to Data[] instead of TestimonialData[]
  message: string;
  success: boolean;
  statusCode: number;
}

const CarouselComp = () => {
  // Custom arrows
  const CustomLeftArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-10 top-5 transform -translate-y-1/2 hidden z-10"
    >
      <FaArrowLeft size={10} />
    </button>
  );

  const CustomRightArrow: React.FC<{ onClick?: () => void }> = ({
    onClick,
  }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-5 transform -translate-y-1/2 hidden z-10"
    >
      <FaArrowRight size={10} />
    </button>
  );

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const [testimonial, setTestimonial] = useState<Data[] | undefined>(undefined);
  console.log(testimonial);

  const {
    isError,
    isFetching,
    isLoading,
    data: testimonialData,
    isSuccess,
  } = useGetAllTestimonialsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (testimonialData && isSuccess) {
      setTestimonial(testimonialData.data);
    }
  }, [testimonialData, isSuccess]);

  // Check data and provide fallback
  const testimonials = testimonial ?? [];

  // Show loading state while data is being fetched

  const override = {
    display: "block",
    margin: "0 auto",
  };
  const [color] = useState("#ffffff");
  if (isLoading) {
    return (
      <div className="w-full  h-[280px] flex justify-center items-center">
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full  h-[280px] bg-pink-100  flex justify-center items-center">
        <p>Failed to load testimonials.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        transitionDuration={3000}
        containerClass="w-full"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {testimonials.length > 0 ? (
          testimonials
            .concat()
            .reverse()
            .map((item) => (
              <div
                key={item._id}
                className="w-full flex justify-center items-center mt-5"
              >
                <div className="h-[280px] w-full flex justify-center items-center">
                  <div className="w-[95%] md:w-5/6 bg-slate-800 flex items-center h-[90%] rounded-2xl flex-col">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center border relative bottom-4">
                      <Image
                        src={item.user?.avatar || profile}
                        alt="profile"
                        width={80}
                        height={80}
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                        priority
                      />
                    </div>
                    <div className="text-center text-sm mb-2">
                      <h3 className="text-lg font-semibold">
                        {item.user.firstName} {item.user.lastName}
                      </h3>
                      <p className="text-xs text-slate-200">
                        {item.user.jobTitle}
                      </p>
                    </div>
                    <p className="px-2 text-center text-xs mb-2 line-clamp-5">
                      "{item.message}"
                    </p>
                    <StarRating rating={item.rating} />
                  </div>
                </div>
              </div>
            ))
        ) : (
          <div className="h-[280px] w-full flex justify-center items-center">
            <p>No testimonials available...</p>
          </div>
        )}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
