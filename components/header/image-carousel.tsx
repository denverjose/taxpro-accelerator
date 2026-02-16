"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const ImageCarousel = () => {
  const [translateX1, setTranslateX1] = useState(0);
  const [translateX2, setTranslateX2] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const width = 800,
    height = 700;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setTranslateX1((prev) => prev - 1.5);
        setTranslateX2((prev) => prev + 1.5);
      } else {
        // Scrolling up
        setTranslateX1((prev) => prev + 1.5);
        setTranslateX2((prev) => prev - 1.5);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <MotionWrapper className="flex flex-col mt-5 items-center pb-16 xs:pb-48">
      <motion.div
        initial={{ translateX: 0 }}
        animate={{
          translateX: translateX1,
          transition: { duration: 0 },
        }}
        className="flex gap-4 justify-center mb-4 items-center  w-44 md:w-96 "
      >
        <Image
          width={width}
          height={height}
          alt="study group"
          src="/images/img1.webp"
          className="image-carousel"
        />
        <Image
          width={width}
          height={height}
          alt="tax professional lady"
          src="/images/img2.webp"
          className="image-carousel"
        />
        <Image
          width={width}
          height={height}
          alt="mentorship session"
          src="/images/img3.webp"
          className="image-carousel"
        />
        <Image
          width={width}
          height={height}
          alt="entrepreneur looking"
          src="/images/img4.webp"
          className="image-carousel"
        />
        <Image
          width={width}
          height={height}
          alt="woman studying"
          src="/images/img5.webp"
          className="image-carousel"
        />
      </motion.div>

      <motion.div
        initial={{ translateX: -125 }}
        animate={{
          translateX: translateX2,
          transition: { duration: 0 },
        }}
        className="flex gap-4 mt-0 justify-center items-center w-44 md:w-96"
      >
        <Image
          width={width}
          height={height}
          alt="tax professional man"
          src="/images/img6.webp"
          className="image-carousel"
        />
        <Image
          width={width}
          height={height}
          alt="entrepreneurs sharing information"
          src="/images/img7.webp"
          className="image-carousel"
        />
        <Image
          width={width}
          height={height}
          alt="business professional woman"
          src="/images/img8.webp"
          className="image-carousel"
        />
      </motion.div>
    </MotionWrapper>
  );
};

export default ImageCarousel;
