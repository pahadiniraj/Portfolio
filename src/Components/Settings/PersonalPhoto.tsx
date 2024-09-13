import Image from "next/image";
import React from "react";
import profile from "../../Assets/ProfileImg/profile.jpg";

const PersonalPhoto = () => {
  return (
    <>
      <div className="p-4">
        <div className="py-2 mb-2 border-b ">
          <p>Your Photo</p>
        </div>
        <div className="flex gap-3 p-2 items-center">
          <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden flex justify-center items-center">
            <Image
              src={profile}
              alt="profile"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-base font-semibold">Edit your photo</p>
            <div className="flex gap-3">
              <button className="text-sm text-slate-300 hover:text-red-500  duration-300">
                Delete
              </button>
              <button className="text-sm text-slate-300 hover:text-green-500 duration-300">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPhoto;
