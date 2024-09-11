"use client";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const loading = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const [color] = useState("#fcfcfc");

  return (
    <div className=" mt-10 absolute right-6">
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
};

export default loading;
