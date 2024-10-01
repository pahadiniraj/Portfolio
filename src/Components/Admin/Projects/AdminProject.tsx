import Image from "next/image";
import React from "react";
import profile from "../../../Assets/ProfileImg/profile.jpg";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AdminProject = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg font-semibold mb-2">All Projects</p>
          <button
            onClick={() => router.push("/dashboard/create-project")}
            className="text-xs font-semibold mb-2 bg-green-600 hover:bg-green-700 px-2 py-1 duration-300 ease-linear active:scale-90  rounded-lg"
          >
            Create Projects
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-md gap-5 justify-center items-center">
            <div className="flex gap-4  bg-slate-700 p-2 rounded-xl ">
              <div className="relative w-[100px] h-[120px]  rounded-xl overflow-hidden flex justify-center items-center">
                <Image
                  src={profile}
                  alt="profile"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="w-[400px] flex flex-col gap-2 justify-center ">
                <p className="text-xl font-semibold">Real State CRM</p>
                <p className="line-clamp-2 text-xs font-light">
                  a business student turned developer with a passion for coding.
                  I specialize in the MERN and PERN stacks, building full-stack
                  web applications using React, Node.js, and PostgreSQL/MongoDB.
                </p>
                <div className="grid grid-cols-5 gap-2">
                  <p className="text-xs border text-center rounded-lg p-1">
                    Nextjs
                  </p>
                  <p className="text-xs border text-center rounded-lg p-1">
                    Mongodb
                  </p>
                  <p className="text-xs border text-center rounded-lg p-1">
                    numpie
                  </p>
                  <p className="text-xs border text-center rounded-lg p-1">
                    reliable
                  </p>
                  <p className="text-xs border text-center rounded-lg p-1">
                    reliable
                  </p>
                </div>
              </div>
              <div className=" w-2/6 flex justify-end items-center">
                <div className="flex-col flex gap-2">
                  <div className="text-xl font-semibold">
                    Categogy: <span>Webdev</span>
                  </div>
                  <div className="text-sm">
                    <p>Niraj Pahadi</p>
                    <p>FullStack Developer</p>
                    <p>sharma12345niraja@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className=" gap-8 flex flex-col justify-center items-center py-2 w-1/6">
                <button>
                  <MdDelete className="text-3xl hover:text-red-600 duration-200 " />
                </button>
                <button>
                  <FaEdit className="text-2xl ml-2 hover:text-yellow-500 duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProject;
