"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const ServicesCard = ({
  imgSrc,
  title,
  description,
  index,
  coming_soon,
}: {
  imgSrc: string;
  title: string;
  description: string;
  index: number;
  coming_soon: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <MotionWrapper className="relative flex flex-col bg-background-card items-center rounded-3xl h-full hover:scale-105  duration-1000 max-w-sm">
      <div className="relative flex items-center flex-col justify-center ">
        {/* { 
          title ? 
        } */}
        <Link
          href={
            !coming_soon
              ? `services/${title.toLowerCase().replace(/ /g, "-")}`
              : "#"
          }
        >
          <Image
            height={420}
            width={520}
            sizes="100vw"
            src={imgSrc}
            className="image-services"
            alt={title}
          />
          <motion.div
            className="absolute bottom-0  w-full bg-primary p-4 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-dark text-sm">
              <p className="text-center">{description}</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-primary "></div>
          </motion.div>
        </Link>
      </div>
      <div className="p-4 flex flex-col align-center text-center relative">
        <h2 className=" text-primary/90 font-semibold text-2xl mb-2 ">
          {title}
        </h2>
        <p
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="text-left cursor-help text-lg line-clamp-1 border-b-[1.5px] border-dotted border-red-500"
        >
          {description}
        </p>
      </div>
      {coming_soon && (
        <div className="absolute top-1 right-1 text-[16px] leading-[18px] text-primary flex bg-background-coming-soon py-[14px] px-4 md:px-[22px] font-bold w-max rounded-full xs:py-3">
          Coming Soon
        </div>
      )}
    </MotionWrapper>
  );
};

export default ServicesCard;
