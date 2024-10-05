"use client";
import React from "react";
import CreateProject from "./CreateProject";
import { useRouter } from "next/navigation";

const ProjectContainer = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full  p-5 ">
        <div className=" bg-black rounded-xl  ">
          <CreateProject />
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
