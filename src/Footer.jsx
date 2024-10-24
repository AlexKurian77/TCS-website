import React from "react";
import { FloatingDock } from "./Components/ui/footer";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/hackgenesis_25/",
    },
    {
      title: "X (Twitter)",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/hackgenesis_24",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <BrowserRouter>
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </BrowserRouter>
    </div>
  );
}
