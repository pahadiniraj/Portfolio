"use client";
import React from "react";
import { FloatingDock } from "../Helper/FloatingDoc";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full " />,
      href: "/",
    },

    {
      title: "About",
      icon: <IconTerminal2 className="h-full w-full " />,
      href: "/about",
    },
    {
      title: "Portfolio",
      icon: <IconNewSection className="h-full w-full " />,
      href: "/portfolio",
    },

    {
      title: "Why Me?",
      icon: <IconExchange className="h-full w-full " />,
      href: "why-me",
    },

    {
      title: "Blogs",
      icon: <IconBrandGithub className="h-full w-full " />,
      href: "/blogs",
    },
    {
      title: "Contact",
      icon: <IconBrandX className="h-full w-full " />,
      href: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full  ">
      <FloatingDock
        mobileClassName="mt-2" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
