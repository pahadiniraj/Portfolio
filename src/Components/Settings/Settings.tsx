"use client";
import React, { useEffect, useState } from "react";
import PersonalFormik from "./PersonalFormik";
import PersonalPhoto from "./PersonalPhoto";
import { useRouter } from "next/navigation";
import { useGetUserQuery, UserData } from "@/Redux/Services/user";
import Testimonial from "../Testimonial/testimonial";
import CreateTestimonialFormik from "../Dashboard/Testimonial/CreateTestimonial";

const Settings = () => {
  const router = useRouter();
  const { data, isSuccess, isLoading } = useGetUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (data && isSuccess) {
      setUser(data.user);
    }
  }, [data, isSuccess]);

  return (
    <>
      <div className="md:px-8 px-2  py-5  overflow-y-auto">
        <p className="text-2xl font-semibold">Setting Page</p>
        <div className="flex flex-col md:flex-row w-full md:gap-8 gap-2 mt-4">
          <div className="md:w-3/5 backdrop-blur-sm bg-slate-950 shadow-md border-slate-700  shadow-slate-700 text-lg p-4 md:rounded-2xl rounded-xl border ">
            <p className="text-lg py-2 border-b mb-2">Personal Information</p>
            <PersonalFormik />
          </div>
          <div className="md:w-2/5 flex flex-col md:gap-4 gap-2 ">
            <div className="bg-slate-950 shadow-md border-slate-700 border  shadow-slate-700 text-lg md:rounded-2xl h-[280px] rounded-xl p-2 scrollbar-none">
              <p className="text-lg py-2 border-b mb-2">Update Avatar</p>
              <PersonalPhoto />
            </div>
            <div className="flex w-full  justify-center px-2 bg-slate-950 shadow-md border-slate-700 border  shadow-slate-700 text-lg md:rounded-2xl flex-col rounded-xl items-center py-5 gap-1 ">
              <p className="font-bold">Trying to Change Password</p>
              <p className="text-xs text-center">
                Click the button below and put the current and new password{" "}
              </p>
              <button
                onClick={() => router.push("/dashboard/change-password")}
                className="bg-blue-600 px-4 py-2  hover:bg-blue-800 mt-3 rounded-lg transition duration-300 ease-linear active:scale-90"
              >
                Change Password
              </button>
              <p className="text-xs mt-2">
                Facing Problem ?{" "}
                <span
                  className="hover:text-purple-500 cursor-pointer duration-300"
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </span>
              </p>
            </div>

            <div className="bg-slate-950 shadow-md border-slate-700 border  shadow-slate-700 text-lg h-[320px] px-3 overflow-y-auto rounded-xl scrollbar-none md:rounded-2xl">
              <p className="text-lg py-2 border-b mb-2">
                Give Ratings to Niraj's Portfolio
              </p>
              <CreateTestimonialFormik />
            </div>
            <div className="flex justify-center text-sm  ">
              <p>
                Are you having difficulties in this app and want to
                <span className="hover:text-red-600  font-semibold ml-1">
                  <button
                    className="  rounded-md duration-300 ease-linear active:scale-90"
                    onClick={() => {
                      if (user?._id) {
                        router.push(`/dashboard/delete-account/${user._id}`);
                      } else {
                        console.error("User ID is not defined.");
                      }
                    }}
                  >
                    Delete account ?
                  </button>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
