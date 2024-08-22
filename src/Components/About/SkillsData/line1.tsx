import React from "react";

interface line1Props {
  className: string;
}

const Line1: React.FC<line1Props> = ({ className }) => {
  return (
    <div
      className={`${className} h-[15px] bg-white rounded-[30px] relative top-[15px]`}
    ></div>
  );
};

export default Line1;
