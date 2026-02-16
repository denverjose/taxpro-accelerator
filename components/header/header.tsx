
// import HeaderButton from "./header-button";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";


const Header = () => {
  return (
    <div className="relative mb-20">
      <MotionWrapper className="flex justify-center items-center mt-32 lg:mt-48 container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[40px] xs:text-5xl md:text-6xl font-bold text-wrap text-center px-6 py-3 text-baseblue">
              Tax Pro Accelerator
            </h1>
            <p className="text-subheading px-8 max-w-[700px] lg:p-0 text-center text-base md:text-lg">
              Software is <b>NOT</b> the business, People are <b>OUR</b> business.
            </p>
          </div>
          {/* <HeaderButton /> */}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Header;
