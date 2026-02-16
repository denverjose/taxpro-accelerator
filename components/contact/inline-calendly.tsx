'use client'
import { useState, useEffect } from 'react';
import { InlineWidget } from "react-calendly"
import config from "@/env-config";


const InlineCalendly = () => {

  const [height, setHeight] = useState("620px");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth > 1024) {
        setHeight("680px");
      } else {
        setHeight("620px");
      }
    };

    window.addEventListener('resize', updateHeight);
    updateHeight(); // Set initial height

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <InlineWidget
      url={config.CALENDLY_URL!}
      pageSettings={{
        hideEventTypeDetails: false,
        hideGdprBanner: false,
        hideLandingPageDetails: false,
        // primaryColor: "00a2ff",
        // textColor: "4d5055",
      }}
      styles={{
        height: height,
      }}
    />
  );
}

export default InlineCalendly