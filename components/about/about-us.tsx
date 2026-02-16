import { ReactNode } from "react";
import Image from "next/image";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

type MemberProps = {
  name: string;
  imgUrl: string;
  position: string;
  description: ReactNode;
  altName:string;
};

const AboutUs = ({ name, imgUrl, position, description,altName }: MemberProps) => {
  return (
    <MotionWrapper className="flex flex-col rounded-lg gap-2 items-center justify-center w-full h-full">
      <Image
        src={imgUrl}
        alt={altName}
        width="0"
        height="0"
        sizes="100vw"
        className="w-[150px] md:w-[250px] h-auto rounded-lg object-contain"
      />

      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="font-bold text-center text-lg break-words w-full">{name}</h2>
        <h2 className="font-semibold text-center text-sm break-words w-full">{position}</h2>
        <MotionWrapper>
          <div className="break-words w-full text-justify">{description}</div>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
};

export default AboutUs;
