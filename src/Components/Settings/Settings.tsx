import React from "react";

const Settings = () => {
  return (
    <>
      <div className="p-4">
        <p className="text-2xl font-semibold">Setting Page</p>
        <div className="flex w-full gap-4 mt-4">
          <div className="w-3/5 bg-slate-800">
            <p className="text-lg">Personal Information</p>
          </div>
          <div className="w-2/5 bg-green-200 text-lg">
            <p>Your Photo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
