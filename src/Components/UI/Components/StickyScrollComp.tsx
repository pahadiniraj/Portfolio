import Image from "next/image";
import { StickyScroll } from "../Helper/StickyScroll";
import img1 from "../../../Assets/StickyScroll/Solution 1.jpg";
import img2 from "../../../Assets/StickyScroll/Solution 2.webp";
import img3 from "../../../Assets/StickyScroll/Solution 3.jpg";
import img4 from "../../../Assets/StickyScroll/Solution 4.png";
import img5 from "../../../Assets/StickyScroll/Solution 5.png";

const content = [
  {
    title: "Thorough Needs Assessment:",
    description:
      "To ensure we meet your goals effectively, I’ll begin with a detailed assessment of your current system and gather all relevant information. This thorough approach will enable me to develop a solution that aligns seamlessly with your business objectives and operates with optimal efficiency.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img1}
          className="h-full w-full  object-cover rounded-md "
          alt="Scalable Approach"
          priority
        />
      </div>
    ),
  },
  {
    title: "Scalable and Future-Proof Design:",
    description:
      "I will design your system with a focus on scalability, ensuring it is built to adapt seamlessly to future growth and technological advancements. This forward-thinking approach will not only enhance the system's flexibility but also save you time and resources over the long term by minimizing the need for extensive future modifications.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img2}
          className="h-full w-full  object-cover rounded-md "
          alt="Scalable Approach"
          priority
        />
      </div>
    ),
  },
  {
    title: "User-Centric Approach:",
    description:
      "We will prioritize a user-centric design to ensure that the final product is both intuitive and tailored to the needs of your end-users. This approach will lead to higher user satisfaction and engagement, as the system will be designed to deliver a seamless and effective experience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img3}
          className="h-full w-full  object-cover rounded-md "
          alt="Scalable Approach"
          priority
        />
      </div>
    ),
  },
  {
    title: "Transparent Communication and Collaboration:",
    description:
      "After deployment, I will offer ongoing support and be readily available for any future updates or enhancements. This commitment ensures that your system remains optimal and continues to meet your needs as your business evolves.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img4}
          className="h-full w-full  object-cover rounded-md "
          alt="Scalable Approach"
          priority
        />
      </div>
    ),
  },
  {
    title: "Post-Deployment Support and Continuous Improvement:",
    description:
      "I will keep you informed throughout the project with regular updates and collaborative sessions. This approach ensures that we stay aligned with your vision and objectives, providing transparency and allowing us to make adjustments as needed to meet your expectations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img5}
          className="h-full w-full  object-right rounded-md "
          alt="Scalable Approach"
          priority
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className=" px-3 py-5 w-full  ">
      <StickyScroll content={content} />
    </div>
  );
}
