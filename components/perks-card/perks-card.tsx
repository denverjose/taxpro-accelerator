"use client";

import { Feature } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";

const PerksCard = ({ feature }: { feature: Feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="md:p-4 flex gap-2 cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleUnhover}
    >
      <div className="rounded-lg bg-background-icon-product p-4 h-fit">
        {feature.icon}
      </div>
      <div className="flex flex-col gap-2 md:gap-3 text-wrap text-justify">
        <h2 className="text-2xl font-semibold">{feature.name}</h2>
        <motion.p
          className={`text-[15px] text-left text-pretty overflow-hidden
           ${!isHovered ? "line-clamp-3" : ""}
          `}
          animate={{ height: isHovered ? "auto" : "4.1rem" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          {feature.description}
        </motion.p>
      </div>
    </div>
  );
};

export default PerksCard;
