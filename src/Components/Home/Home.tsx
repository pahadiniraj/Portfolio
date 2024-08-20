"use client";
import React, { useState } from "react";
import Button from "../Button/Button";

const HomeComponent = () => {
  const [text, setText] = useState(false);
  const handleClick = () => {
    setText(!text);
    console.log("hey there ");
  };
  return (
    <div className="">
      <Button
        onClick={handleClick}
        text="Hello world"
        className="border p-2 "
      />
    </div>
  );
};

export default HomeComponent;
