"use client";

import Logo from "./logo";
import WebNavigation from "./web-navigation";
import MobileNavigation from "./mobile-navigation";
import NavbarButton from "./navbar-button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : "-100%",  }}
      whileInView={{ opacity: 1 }}
      transition={{
        opacity: { delay: .6, duration:1.3 },
        type: "tween",
        stiffness: 100,
        damping: 10,
        duration: 0.3, 
      }}
      className=" fixed top-0 h-fit w-full flex items-center justify-center z-50 text-primary"
    >
      <div className="flex mt-9 bg-background-navbar items-center justify-between w-full p-2 rounded-full container">
        <Logo />
        <WebNavigation />
        <div className="flex flex-row-reverse z-10 ">
          <MobileNavigation />
          <NavbarButton />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
