import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./css/navbar.css";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-black" id="hovered-title">
      <motion.p
        onMouseEnter={() => isDesktop && setActive(item)}
        onMouseLeave={() => isDesktop && setActive(false)}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black dark:bg-black backdrop-blur-sm rounded-[20px] overflow-hidden border border-white/[0.4] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      id="navbar"
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6" //navbar ka background change krne wali jaga
    >
      {/* Hamburger for mobile view */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Desktop Menu */}
      <ul>{children}</ul>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={menuOpen && !isDesktop ? "active" : ""}>
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-white hover:opacity-[0.6]"
    >
      {children}
    </Link>
  );
};
