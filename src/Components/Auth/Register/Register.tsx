"use client";
import Button from "../../Button/Button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import FormikRegister from "./FormikRegister";
import { AnimatePresence, motion } from "framer-motion";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const Register: React.FC = () => {
  const loginGoogle = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");
  };

  const router = useRouter();

  return (
    <>
      <div className=" w-full flex justify-center items-center bg-gray-900 md:bg-transparent h-full ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className=" inset-0 md:w-2/6  md:bg-gray-900 rounded-2xl   z-10 bg-opacity-30 backdrop-blur-sm  "
        >
          <div className=" p-4  rounded-xl max-h-[90vh] overflow-y-auto  relative ">
            <div className="flex justify-center flex-col items-center w-full   mb-2">
              <h1 className="text-xl font-bold mb-1">Niraj's Portfolio</h1>
              <p className="text-center text-xs ">
                Welcome to Niraj's Portfolio Sign up to stay updated with my
                latest projects. Fill in your details and join the creative
                journey!
              </p>
            </div>
            <FormikRegister />
            <Button
              type="button"
              className="w-full flex justify-center items-center gap-4 bg-white mt-4 rounded-3xl p-2"
              onClick={loginGoogle}
            >
              <FcGoogle className="text-3xl" />
              <p className="text-black font-semibold">Login With Google</p>
            </Button>
            <button
              className="absolute top-2 left-2 transition duration-300 ease-linear active:scale-90"
              onClick={() => router.push("/login")}
            >
              <TiArrowBack className="text-2xl" />
            </button>
            <button
              className="absolute top-2 right-2 transition duration-300 ease-linear active:scale-90"
              onClick={() => router.push("/")}
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Register;
