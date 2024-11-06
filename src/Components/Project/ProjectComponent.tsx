"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCaretBack } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";
import { useGetProjectByIdQuery } from "@/Redux/Services/project";
import img from "../../Assets/ProfileImg/DefaultProfile.jpg";
import LoaderComponent from "../Loader/LoaderComponent";
import { TbWorldWww } from "react-icons/tb";
import { convertISOToDate } from "../ConvertISO/convertDate";
import AlertButton from "../Auth/Login/LoginButton";

const ProjectComponent = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading } = useGetProjectByIdQuery(id as string);

  if (isLoading) {
    return (
      <div className="w-full h-screen md:h-[390px] md:w-[900px] flex justify-center items-center z-20 ">
        <LoaderComponent />
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex flex-col md:px-12 px-5 md:h-[390px] md:w-[900px] overflow-hidden md:rounded-[50px] bg-opacity-90 md:bg-opacity-100 h-screen w-full overflow-y-auto md:overflow-visible z-20 relative"
        >
          <button
            onClick={() => router.push("/portfolio")}
            className="absolute left-7 top-4 "
          >
            <IoCaretBack className="text-2xl" />
          </button>
          <h1 id="contact-request-text" className="contact-request-paragraph">
            <span
              id="contact-link"
              className="contact-link"
              onClick={() => router.push("/")}
            >
              <span className="text-xl font-semibold font-serif italic cursor-pointer">
                Niraj
              </span>
              <svg
                id="contact-link-icon"
                viewBox="0 0 70 36"
                className="contact-icon"
              >
                <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </span>
          </h1>

          <div className="md:overflow-hidden overflow-y-auto scrollbar-none   flex flex-col md:flex-row w-full gap-1 md:gap-4 ">
            {data?.data?.category === "music" ? (
              <div className="flex justify-center items-center py-4">
                <div className=" w-full max-w-4xl h-[300px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={data?.data?.githubLink || ""}
                    title={data?.data?.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : (
              <div className="h-[320px] md:w-2/5 py-4 ">
                <div className="w-full h-full mb-4 flex justify-start items-start relative">
                  <div className="relative md:w-full h-[300px] w-full md:h-full overflow-y-auto flex justify-start items-start ">
                    <Image
                      src={data?.data?.image || img.src}
                      alt={`Image for ${data?.data?.title}`}
                      className=" object-cover  w-[100%]"
                      priority
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="text-white md:w-3/5  py-4 flex flex-col gap-4 md:overflow-y-auto  md:h-[300px] md:pr-2">
              <div className="text-2xl w-full mt-1  text-start flex justify-between items-center">
                <span className="py-1 px-2 rounded-lg bg-gradient-to-r  from-indigo-500 to-purple-500 font-semibold ">
                  {data?.data?.title}
                </span>
              </div>
              <p className="text-sm ">{data?.data?.description}</p>
              <div>
                {data?.data?.category === "graphicdesign" && (
                  <p className="font-semibold mb-1">Key Elements:</p>
                )}
                {data?.data?.category === "digitalmarketing" && (
                  <p className="font-semibold mb-1">Core Components:</p>
                )}
                {data?.data?.category === "webdevelopment" && (
                  <p className="font-semibold mb-1">Key Features:</p>
                )}

                {data?.data?.category !== "music" && (
                  <ul className="list-disc ml-5 text-sm">
                    {data?.data?.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                {data?.data.category === "music" ? (
                  <p className="font-semibold mb-2">Tags:</p>
                ) : (
                  <p className="font-semibold mb-2">Technologies Used:</p>
                )}

                <div className=" text-xs grid md:grid-cols-4 grid-cols-3 gap-2 pr-5">
                  {data?.data.technologies.map((value, index) => (
                    <p
                      className="border-2 border-slate-600 rounded-lg text-center p-1"
                      key={index}
                    >
                      {value}
                    </p>
                  ))}
                </div>
              </div>
              {(data?.data?.githubLink?.trim() ||
                data?.data?.liveDemoLink?.trim()) && (
                <div className="right-6 top-5 flex justify-start items-center gap-3">
                  <div className="font-semibold text-base">Links:</div>

                  {data?.data?.category === "music" ? (
                    data?.data?.liveDemoLink && (
                      <a
                        href={data?.data?.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md mb-2"
                      >
                        <button className="bg-red-600 text-white p-1 text-xs rounded-lg hover:scale-95  duration-200">
                          Subscribe
                        </button>
                      </a>
                    )
                  ) : (
                    <div className="flex gap-3">
                      {data?.data?.githubLink?.trim() &&
                        !data?.data?.liveDemoLink?.trim() && (
                          <a
                            href={data?.data?.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaSquareGithub className="text-2xl" />
                          </a>
                        )}

                      {data?.data?.liveDemoLink?.trim() &&
                        !data?.data?.githubLink?.trim() && (
                          <a
                            href={data?.data?.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <TbWorldWww className="text-2xl" />
                          </a>
                        )}

                      {data?.data?.githubLink?.trim() &&
                        data?.data?.liveDemoLink?.trim() && (
                          <>
                            <a
                              href={data?.data?.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaSquareGithub className="text-2xl" />
                            </a>
                            <a
                              href={data?.data?.liveDemoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TbWorldWww className="text-2xl" />
                            </a>
                          </>
                        )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex  justify-start items-start w-full ">
                <div className="flex justify-start gap-2 items-center">
                  <p className="text-sm font-semibold">Created At:</p>
                  <p className="text-xs">
                    {data?.data?.createdAt
                      ? convertISOToDate(data.data.createdAt)
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProjectComponent;
