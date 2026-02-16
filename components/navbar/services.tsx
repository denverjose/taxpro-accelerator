"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/lib/constants/services-constants";
import { motion } from "framer-motion";

interface ServicesProps {
  toggle?: () => void;
  isMobile?: boolean; // Assuming isMobile is a string that represents device type or state
}

const Services = ({ toggle, isMobile }: ServicesProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!isMobile) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
  };
  const handleServiceClick = () => {
    setDropdownOpen(false);
    if (toggle) {
      toggle();
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      className="relative cursor-pointer w-fit"
      ref={dropdownRef}
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center space-x-2 hover:text-navbar-text-hover"
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
          />z 
        </svg>

        <span>Services</span>
        <svg
          className={`transition-transform h-5 w-5 duration-300 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </div>

      {dropdownOpen && (
        <motion.div
          style={{ willChange: "auto" }}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "fit-content", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="z-10 rounded-md shadow-lg overflow-hidden "
        >
          <ul
            className={`
              flex flex-col gap-2 py-1 pl-3 bg-background-navbar rounded-3xl
              ${!isMobile && "absolute top-full right-1 pl-5 py-3 pr-8"}
              `}
          >
            {services.map(
              (service) =>
                !service.coming_soon && (
                  <Link
                    key={service.title}
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    <li
                      key={service.title.toLowerCase().replace(/ /g, "-")}
                      className="py-1 hover:text-navbar-text-hover cursor-pointer"
                      onClick={handleServiceClick} // Close dropdown on link click
                    >
                      <div className="flex w-max gap-2 items-center">
                        {service.icon}
                        {service.title}
                      </div>
                    </li>
                  </Link>
                )
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
