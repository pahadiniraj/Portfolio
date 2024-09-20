import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaBook,
  FaThumbsUp,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const TotalInfo = () => {
  return (
    <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-md border border-blue-700 rounded-lg overflow-hidden flex items-center ">
        <div className="w-full px-2 py-1">
          <p className="text-xs text-end font-medium ">Total Users</p>
          <div className="text-lg font-bold text-end">123</div>
          <FaUser className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-green-800 text-white shadow-md border border-green-700 rounded-lg overflow-hidden flex items-center">
        <div className="w-full px-2">
          <div className="text-xs font-medium text-end">Total Messages</div>
          <div className="text-lg font-bold text-end">456</div>
          <FaEnvelope className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-500 to-red-800 text-white shadow-md border border-red-700 rounded-lg overflow-hidden  flex items-center ">
        <div className="w-full px-2">
          <div className="text-xs font-medium text-end">Total Blogs</div>
          <div className="text-lg font-bold text-end">78</div>
          <FaBook className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white shadow-md border border-yellow-700 rounded-lg overflow-hidden flex items-center ">
        <div className="w-full px-2">
          <div className="text-xs font-medium text-end">Total Likes</div>
          <div className="text-lg font-bold text-end">910</div>
          <FaThumbsUp className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-purple-800 text-white shadow-md border border-purple-700 rounded-lg overflow-hidden  flex items-center ">
        <div className="w-full px-2">
          <div className="text-xs font-medium text-end">Total Comments</div>
          <div className="text-lg font-bold text-end">112</div>
          <FaComments className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-teal-500 to-teal-800 text-white shadow-md border border-teal-700 rounded-lg overflow-hidden  flex items-center ">
        <div className="w-full px-2">
          <div className="text-xs font-medium text-end"> Testimonials</div>
          <div className="text-lg font-bold text-end">34</div>
          <FaStar className="h-5 w-5" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white shadow-md border border-indigo-700 rounded-lg overflow-hidden flex items-center ">
        <div className="w-full px-2">
          <div className="text-xs font-medium text-end">Total Projects</div>
          <div className="text-lg font-bold text-end">56</div>
          <FaBriefcase className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default TotalInfo;
