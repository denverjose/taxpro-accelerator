import React from "react";
import Image from "next/image";
import GridCards from "./grid-cards";
import Carousel from "./carousel";
import { MotionWrapperDelay, MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import CalendlyButton from "../calendly/calendly-button";
import { steps } from "@/lib/constants/development-constants";


const Development = () => {
  return (
    <>
      <div className="px-4 xs:px-5 md:px-6 flex flex-col items-center text-center pb-20 xs:pt-4 max-w-7xl mx-auto">
        <div className="mb-[34px]">
          <h1 className="text-[34px] xs:text-[40px] font-bold mb-3 md:text-[56px] lg:text-[62px]">
            App Development
          </h1>
          <p className=" text-subheading md:text-lg">
            Book an appointment with Jose to get your idea in motion and translated into a production grade application in just months.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row align-center w-full max-w-7xl justify-between gap-14 md:gap-8 xl:gap-12 md:mb-10">
          <Image
            className="w-full md:-ml-32"
            height={400}
            width={400}
            alt="development header"
            src="/images/development-header.webp"
          />
          <MotionWrapperDelay className="flex flex-col align-center justify-center md:max-w-[442px] ">
            <div className="text-[16px] leading-[18px] text-dark flex bg-background-process py-[10px] px-5 mb-3 font-bold  w-max rounded-full xs:py-3 xs:px-[18px] xs:mb-4 md:py-[10px]">
              The Process
            </div>
            <h2 className="text-[34px] xs:text-[40px] font-bold mb-3 md:mb-4 md:text-[56px]">
              How it Works
            </h2>
            <p className="text-subheading pb-7 md:text-lg md:pb-8">
              A quick and easy process to get an experienced team to build and deploy your next application.
            </p>
          </MotionWrapperDelay>
        </div>
      </div>
      <div className="grid xs:grid-cols-2 gap-7 lg:grid-cols-4 max-w-7xl mx-auto px-4 xs:px-5 md:px-6 py-20">
        {steps.map((step, index) => (
          <GridCards
            key={index}
            title={step.title}
            description={step.description}
            index={index + 1}
          />
        ))}
      </div>
      <MotionWrapper>
        <CalendlyButton
          buttonClassname="py-2 px-3 rounded-full relative radial-gradient linear-mask bg-background-calendly shadow-sm shadow-white hover:bg-background-calendly-hover hover:scale-105 duration-75"
          className="w-max h-full mx-auto rounded-full bg-white animate-bounce"
          content="Get Started!"
          contentClassname="font-bold text-md"
          forJose={true}
        />
      </MotionWrapper>
      <div className="pt-20">
        <MotionWrapper className="mx-auto text-center mb-12 px-4 xs:px-5 md:px-6 max-w-[748px]">
          <h2 className="container mx-auto font-bold text-[34px] xs:text-[40px] md:text-[56px] lg:text-[62px] mb-3 lg:mb-4 leading-tight">
            Trained to build any complex application
          </h2>
          <p className="container mx-auto text-subheading md:text-lg leading-7">
            We sit down with you and make sure that we understand your needs. Then we go on to build a scalable application using the latest and most robust technology that gives you the best solution.
          </p>
        </MotionWrapper>
        <Carousel />
      </div>
    </>
  );
};

export default Development;
