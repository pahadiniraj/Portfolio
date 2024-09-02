"use client";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const loading = () => {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  const [color] = useState("#cd0202");

  return (
    <div className="text-white absolute top-2 right-2">
      <ClipLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default loading;
