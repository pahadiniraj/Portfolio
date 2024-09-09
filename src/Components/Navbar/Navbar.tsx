import React from "react";
import { FloatingDockDemo } from "../UI/Components/FlotingDocComp";

const Navbar = () => {
  return (
    <>
      <div className="fixed md:static md:bottom-0  bottom-5 gap-2  right-6  md:w-full md:flex md:justify-center mt-5  ">
        <FloatingDockDemo />
      </div>
    </>
  );
};

export default Navbar;
