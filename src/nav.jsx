"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./Components/ui/navbar-menu";
import { cn } from "./utils/cn";
import "./Components/ui/css/navbar.css"

export function NavbarDemo() {
  return (
    <div id="resp-nav-outer" className="relative flex w-[100vw] items-center">
      <Navbar />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  return (
    <div id="responsive-nav" className={cn("relative inset-x-0 max-w-4xl z-50 w-3/4", className)}>
      <Menu setActive={setActive}>
        <div onClick={() => handleScroll("about")}>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm cursor-pointer">About Us</div>
          </MenuItem>
        </div>
        <div onClick={() => handleScroll("past-events")}>
          <MenuItem setActive={setActive} active={active} item="Past Events">
            <div className="text-sm grid cursor-pointer">Past Events</div>
          </MenuItem>
        </div>
        <div onClick={() => handleScroll("gallery")}>
          <MenuItem setActive={setActive} active={active} item="Gallery">
            <div className="flex flex-col text-sm cursor-pointer">View Gallery</div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
