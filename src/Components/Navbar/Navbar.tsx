import React from "react";
import { FloatingDockDemo } from "../UI/Components/FlotingDocComp";

const Navbar = () => {
  return (
    <>
      <div className="fixed  bottom-5 w-full left-0 md:static">
        <FloatingDockDemo />
      </div>
    </>
  );
};

export default Navbar;
