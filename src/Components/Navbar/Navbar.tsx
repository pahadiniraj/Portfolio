import React from "react";
import { FloatingDockDemo } from "../UI/Components/FlotingDocComp";

const Navbar = () => {
  return (
    <>
      <div className="fixed  bottom-5  right-6  md:static ">
        <FloatingDockDemo />
      </div>
    </>
  );
};

export default Navbar;
