"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FeatureComparisonList = ({ feature, index }: any) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div key={index} className="relative">
      <li
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="features hover:cursor-help"
      >
        <p className="custom-line-clamp-cards features-list">{feature}</p>
      </li>
      {isHover && (
        <motion.div
          className={`absolute left-full top-0 py-2 w-full px-2 bg-primary rounded-lg z-10
          `}
          initial={{ x: -10 }}
          animate={{
            x: isHover ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="text-dark text-sm text-pretty">
            <p className="text-center">{feature}</p>
          </div>
          <div className="absolute bottom-1/2 left-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-primary"></div>
        </motion.div>
      )}
    </div>
  );
};

export default FeatureComparisonList;
