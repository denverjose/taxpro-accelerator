"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import config from "@/env-config";
const CalendlyButton = ({
  className,
  content,
  buttonClassname,
  contentClassname,
  forJose,
}: any) => {
  useEffect(() => {
    const head = document.querySelector("head");

    const linkStyle = document.createElement("link");
    linkStyle.href = "https://assets.calendly.com/assets/external/widget.css";
    linkStyle.rel = "stylesheet";
    head?.appendChild(linkStyle);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(linkStyle);
      head?.removeChild(script);
    };
  }, []);

  interface WindowWithCalendly extends Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
  const openCalendlyPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const Calendly = (window as WindowWithCalendly).Calendly;
    
    let url;

    if (forJose) {
      url = config.CALENDLY_URL_JOSE;
    } else {
      url = config.CALENDLY_URL;
    }

    if (Calendly && url) {
      Calendly.initPopupWidget({ url });
    } else {
      console.error("Calendly script not loaded properly.");
    }
  };
  return (
    <div className={className}>
      <motion.button
        /* @ts-ignore */
        initial={{ "--x": "100%", scale: 1 }}
        /* @ts-ignore */
        animate={{ "--x": "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className={buttonClassname}
        onClick={openCalendlyPopup}
      >
        <div className="flex items-center gap-2 text-calendly-text">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
            />
          </svg>
          <div className="flex flex-col items-start h-full w-full relative">
            <span className={contentClassname}>{content}</span>
            <span className="italic text-[10px] font-semibold">
              Powered by Calendly
            </span>
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default CalendlyButton;
