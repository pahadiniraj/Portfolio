"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaClipboard } from "react-icons/fa";
import { useGetContactQuery } from "@/Redux/Services/admin";
import { IoClose } from "react-icons/io5";
import UpdateContact from "../UpdateContact/UpdateContact";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ContactValues {
  fullName: string;
  email: string;
  message: string;
  subject: string;
  _id: string;
  status: string;
}

const GetContact = () => {
  const [contact, setContact] = useState<ContactValues[] | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactValues | null>(
    null
  );
  const router = useRouter();

  const {
    isLoading,
    data: contactData,
    isSuccess,
    refetch,
  } = useGetContactQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (contactData && isSuccess) {
      setContact(contactData?.data);
    }
  }, [contactData, isSuccess]);

  const handleContactClick = (contactItem: ContactValues) => {
    setSelectedContact(contactItem); // Set the clicked contact data
  };

  const handleClosePopup = () => {
    setSelectedContact(null); // Close the popup by resetting selected contact
  };

  const handleUpdateSuccess = () => {
    refetch(); // Refetch contacts when update is successful
  };

  return (
    <div className="py-4 px-6">
      <div className="w-full h-[500px] bg-slate-900 rounded-xl px-6 py-2 relative overflow-y-auto">
        <button
          className="absolute right-4"
          onClick={() => router.push("/dashboard/admin-dashboard")}
        >
          <IoClose className="text-3xl" />
        </button>
        <div className="mt-2 text-2xl font-semibold">Client Messages</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {isLoading
            ? Array(6)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="p-4">
                    <Skeleton height={120} className="rounded-3xl" />
                  </div>
                ))
            : contact
                ?.slice()
                .reverse() // Reverse the contact array
                .map((value, index) => (
                  <div key={value._id}>
                    <div
                      className={`text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 cursor-pointer ${
                        value.status === "unseen"
                          ? "bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white"
                          : value.status === "inprogress"
                          ? "bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 text-black"
                          : value.status === "completed"
                          ? "bg-gradient-to-r from-green-800 via-green-600 to-green-800 text-white"
                          : value.status === "rejected"
                          ? "bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-white"
                          : "bg-gray-500 text-white"
                      }`}
                      onClick={() => handleContactClick(value)}
                    >
                      <div className=" absolute">
                        {/* Reverse index starting from the length of contact */}
                        <p>{contact.length - index}</p>
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <FaUser className="text-xl" />
                        <p className="text-xl font-semibold">
                          {value.fullName}
                        </p>
                      </div>
                      <div className="flex items-center justify-end mb-2">
                        <p className="text-xs">{value.email}</p>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaClipboard className="text-lg" />
                        <p className="text-base font-semibold border-b">
                          {value.subject}
                        </p>
                      </div>
                      <div className="flex items-start">
                        <p className="text-xs line-clamp-1">{value.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
        </div>

        {selectedContact && (
          <UpdateContact
            userData={selectedContact}
            handleClose={handleClosePopup}
            onSuccess={handleUpdateSuccess} // Pass refetch handler to trigger after update
          />
        )}
      </div>
    </div>
  );
};

export default GetContact;
