import ServicesCard from "./services-card";
import { services } from "@/lib/constants/services-constants";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const Services = () => {
  return (
    <MotionWrapper className="flex flex-col items-center justify-center w-full mt-20 xs:mt-28 md:mt-40 lg:mt-32 max-w-7xl mx-auto pb-24 xs:pb-28 md:pb-36 lg:pb-48 xl:pb-24">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-[45px] pb-3">
          Our Services
        </h2>
        <h2 className=" text-[26px] text-subheading text-center pb-7">
          All the tools & support you need for your personal & business growth
        </h2>
      </div>
      <MotionWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 justify-items-center w-11/12">
        {services.map((service, index) => (
          <ServicesCard
            key={service.imgSrc}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
            index={index}
            coming_soon={service.coming_soon}
          />
        ))}
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default Services;
