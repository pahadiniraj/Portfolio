"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaClipboard,
} from "react-icons/fa";
import { useGetContactQuery } from "@/Redux/Services/contact";

interface ContactValues {
  fullName: string;
  email: string;
  message: string;
  subject: string;
}

interface Contact {
  data: ContactValues[];
  message: string;
  success: boolean;
}

const GetContact = () => {
  const [contact, setContact] = useState<ContactValues[] | null>(null);
  const [openContact, setOpenContact] = useState(false);
  const router = useRouter();

  console.log(contact);

  const {
    isLoading,
    data: contactData,
    isSuccess,
  } = useGetContactQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (contactData && isSuccess) {
      setContact(contactData?.data);
    }
  }, [contactData, isSuccess]);

  const handleCloseModal = () => setOpenContact(false);

  return (
    <>
      <div className="py-4 px-6 ">
        <div className="w-full h-[490px]  bg-slate-800 rounded-xl px-6 py-2 relative ">
          <button
            className="absolute right-4 "
            onClick={() => router.push("/dashboard/admin-dashboard")}
          >
            X
          </button>
          <div className="mt-2 text-2xl font-semibold">Client Messages</div>
          {contact?.map((value, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5  hover:cursor-pointer mt-8 "
              onClick={() => setOpenContact(!openContact)}
            >
              <div className="bg-gradient-to-r from-green-800 via-green-600 to-green-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4">
                <div className="flex items-center gap-2 justify-end">
                  <FaUser className="text-xl" />
                  <p className="text-xl font-semibold">{value.fullName}</p>
                </div>
                <div className="flex items-center justify-end mb-2">
                  <FaEnvelope className="mr-2" />
                  <p className="text-xs">{value.email}</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaClipboard className="text-lg" />
                  <p className="text-base font-semibold border-b">
                    {value.subject}
                  </p>
                </div>
                <div className="flex items-start">
                  <p className="text-xs line-clamp-3">{value.message}</p>
                </div>
              </div>
              {openContact && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                  <div
                    className="bg-black p-6 rounded-md w-2/5 relative shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-gray-500 "
                      onClick={handleCloseModal}
                    >
                      X
                    </button>

                    <p className="text-2xl font-semibold mb-4 text-white">
                      {value.fullName}
                    </p>

                    <div className="text-white">
                      <p>
                        <strong>Email:</strong>{" "}
                        <FaEnvelope className="inline-block" /> {value.email}
                      </p>
                      <p>
                        <strong>Subject:</strong>{" "}
                        <FaClipboard className="inline-block" /> {value.subject}
                      </p>
                      <hr className="my-4" />
                      <p>
                        <strong>Message:</strong>
                      </p>
                      <div className="bg-gray-800 p-3 rounded-md shadow-inner h-[200px] overflow-y-auto">
                        <p className="pb-2">
                          <FaRegCommentDots className="inline-block mr-2" />
                          Hello Niraj,
                        </p>
                        {value.message}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetContact;
