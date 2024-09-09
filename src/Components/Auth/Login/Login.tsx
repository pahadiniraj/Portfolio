"use client";
import Button from "../../Button/Button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import FormikLogin from "./FormikLogin";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../Redux/hooks";
import { setUser } from "../../Redux/Slice/authSlice";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoCaretBack } from "react-icons/io5";
import { googleAuth } from "@/Services/googleApi";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const responeGoogle = async (authresult: any) => {
    try {
      if (authresult["code"]) {
        const result = await googleAuth(authresult["code"]);
        console.log(result);
        toast.success(result.data.message);
        dispatch(
          setUser({
            accessToken: result.data.tokens,
          })
        );
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = useGoogleLogin({
    onError: responeGoogle,
    onSuccess: responeGoogle,
    flow: "auth-code",
  });
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
          className=" inset-0 md:w-2/6  md:bg-gray-900 rounded-2xl   z-10 bg-opacity-30 backdrop-blur-sm   "
        >
          <div className="p-4 rounded-xl md:max-h-[90vh] overflow-y-auto relative">
            <div className="flex justify-center w-full  ">
              <div className="flex justify-center flex-col items-center w-full mb-4 gap-1  ">
                <h1 className="text-xl font-bold mb-1">Niraj's Portfolio</h1>
                <p className="text-center text-xs ">
                  Welcome to Niraj's Portfolio Sign up to stay updated with my
                  latest projects. Fill in your details and join the creative
                  journey!
                </p>
              </div>
            </div>
            <div className="w-full">
              <FormikLogin />
            </div>
            <Button
              className="w-full flex justify-center items-center gap-4 bg-white mt-4 rounded-3xl p-2"
              onClick={googleLogin}
            >
              <FcGoogle className="text-3xl" />
              <p className="text-black font-semibold">Login With Google</p>
            </Button>
            <div className="text-center mt-4 flex justify-center gap-1  text-xs">
              <p className="font-light">Not yet Registered ? </p>
              <button
                className="hover:text-purple-500 font-bold transition-colors duration-300"
                onClick={() => router.push("/register")}
              >
                Register
              </button>
            </div>

            <button
              className=" transition duration-300 ease-linear active:scale-90 flex justify-center items-center absolute top-4 left-2"
              onClick={() => router.push("/")}
            >
              <IoCaretBack className="text-2xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
