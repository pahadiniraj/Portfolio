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
      <div className="px-8 py-5  overflow-y-auto">
        <p className="text-2xl font-semibold">Setting Page</p>
        <div className="flex w-full gap-8 mt-4">
          <div className="w-3/5 backdrop-blur-sm bg-slate-950 shadow-md border-slate-700  shadow-slate-700 text-lg p-4 rounded-2xl border ">
            <p className="text-lg py-2 border-b mb-2">Personal Information</p>
            <PersonalFormik />
          </div>
          <div className="w-2/5 flex flex-col gap-4 ">
            <div className="bg-slate-950 shadow-md border-slate-700 border  shadow-slate-700 text-lg rounded-2xl h-[280px] p-2   scrollbar-none">
              <p className="text-lg py-2 border-b mb-2">Update Avatar</p>
              <PersonalPhoto />
            </div>
            <div className="flex w-full  justify-center px-2 bg-slate-950 shadow-md border-slate-700 border  shadow-slate-700 text-lg rounded-2xl flex-col items-center py-5 gap-1 ">
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
                <span className="hover:text-purple-500 cursor-pointer duration-300">
                  Contact
                </span>
              </p>
            </div>

            <div className="bg-slate-950 shadow-md border-slate-700 border  shadow-slate-700 text-lg h-[315px] p-3 overflow-y-auto rounded-2xl">
              <p className="text-lg py-2 border-b mb-2">
                Give Ratings to Niraj's Portfolio
              </p>
              <CreateTestimonialFormik />
            </div>
            <div className="flex justify-end text-sm ">
              <p>
                Are you having difficulties in this app and want to
                <span className="hover:text-red-600  font-semibold">
                  <button
                    className="  rounded-md duration-300 ease-linear active:scale-90"
                    onClick={() => {
                      if (user?._id) {
                        console.log(
                          `Navigating to: /dashboard/delete-account/${user._id}`
                        );
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
