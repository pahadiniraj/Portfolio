"use client";
import React from "react";
import { FloatingDock } from "../Helper/FloatingDoc";
import { IoHome } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaPersonCircleQuestion } from "react-icons/fa6";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IoHome className="h-full w-full " />,
      href: "/",
    },

    {
      title: "About",
      icon: <FaUserTie className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: <FaDiagramProject className="h-full w-full " />,
      href: "/portfolio",
    },

    {
      title: "Why Me?",
      icon: <FaPersonCircleQuestion className="h-full w-full " />,
      href: "why-me",
    },
    {
      title: "Contact",
      icon: <MdMessage className="h-full w-full " />,
      href: "/contact",
    },
  ];
  return (
    <div>
      <FloatingDock
        mobileClassName="h-full w-full mt-2" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
