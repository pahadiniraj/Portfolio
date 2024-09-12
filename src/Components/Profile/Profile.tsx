import Image from "next/image";
import React from "react";
import profile from "../../Assets/ProfileImg/profile.jpg";

const Profile = () => {
  return (
    <>
      <div className="px-8 py-2">
        <p className="text-2xl font-bold mt-2 ">Profile</p>
        <div className="h-[370px] w-full bg-gradient-to-r from-black shadow-md border-slate-500 border shadow-slate-700 rounded-xl mt-4 flex justify-center items-center flex-col overflow-y-auto py-2">
          <div className="w-[170px] h-[170px] rounded-full flex justify-center items-center overflow-hidden relative">
            {/* Blurred background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl"></div>

            {/* Container for the image */}
            <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src={profile}
                alt="profile"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
          </div>
          <p className="text-xl font-semibold mt-2">Niraj Pahadi</p>
          <p className="text-xs text-slate-300">UI/UX Designer</p>
          <p className="mt-4 font-semibold">About Me</p>
          <p className="px-8 text-xs text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque posuere fermentum urna, eu condimentum mauris tempus
            ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies.
            Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed,
            aliquam lacus.
          </p>
          <p className="mt-3">logos</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
