import React from "react";
import PersonalFormik from "./PersonalFormik";
import PersonalPhoto from "./PersonalPhoto";

const Settings = () => {
  return (
    <>
      <div className="px-8 py-5">
        <p className="text-2xl font-semibold">Setting Page</p>
        <div className="flex w-full gap-8 mt-4">
          <div className="w-3/5 bg-gradient-to-r from-black to-gray-800 shadow-md border-slate-700  shadow-slate-700 text-lg p-4 rounded-md border ">
            <p className="text-lg py-2 border-b mb-2">Personal Information</p>
            <PersonalFormik />
          </div>
          <div className="w-2/5 bg-gradient-to-r from-black to-gray-800  shadow-md border-slate-700 border  shadow-slate-700 text-lg rounded-md h-[400px]">
            <PersonalPhoto />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
