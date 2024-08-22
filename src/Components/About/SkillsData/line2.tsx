import React from "react";

interface line2Props {
  className: string;
}

const Line2: React.FC<line2Props> = ({ className }) => {
  return <div className="w-full h-[15px] bg-[#696969] rounded-[30px]"></div>;
};

export default Line2;
