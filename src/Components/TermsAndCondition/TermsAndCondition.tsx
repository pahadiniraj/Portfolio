"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";

const TermsAndConditions = () => {
  const router = useRouter();
  return (
    <div className="h-screen  text-gray-200 overflow-y-auto relative w-full">
      <div className="max-w-2xl mx-auto p-6  w-full">
        <h1 className="text-3xl font-bold text-center text-blue-400">
          Terms and Conditions
        </h1>
        <p className="mt-4">
          These Terms and Conditions govern your use of our portfolio app. By
          using the app, you agree to these terms in full.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          Acceptance of Terms
        </h2>
        <p className="mt-2">
          By accessing and using the app, you accept and agree to be bound by
          the terms of this agreement. If you do not agree, you may not use the
          app.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          User Responsibilities
        </h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            You are responsible for maintaining the confidentiality of your
            account.
          </li>
          <li>You must not share your account details with anyone else.</li>
          <li>You agree to use the app only for lawful purposes.</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          Intellectual Property
        </h2>
        <p className="mt-2">
          The content, layout, design, data, and graphics on the app are
          protected by copyright, trademarks, and other intellectual property
          rights.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          Limitation of Liability
        </h2>
        <p className="mt-2">
          In no event will we be liable for any indirect, incidental, special,
          or consequential damages arising from your use of the app.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          Changes to Terms
        </h2>
        <p className="mt-2">
          We may update these Terms and Conditions from time to time. We will
          notify you of any changes by posting the new terms on this page.
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-blue-400">
          Contact Us
        </h2>
        <p className="mt-2">
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at{" "}
          <strong>sharma12345niraj@gmail.com</strong>.
        </p>
      </div>
      <button
        className="hover:to-blue-500 duration-200  absolute top-7 left-5"
        onClick={() => router.push("/login")}
      >
        <IoMdArrowDropleft className="text-4xl" />
      </button>
    </div>
  );
};

export default TermsAndConditions;
