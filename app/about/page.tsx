import AboutUs from "@/components/about/about-us";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import { Metadata } from "next";
import { aboutMetadata } from "@/lib/metadata";
import { members } from '@/lib/constants/about-constants';
export const metadata: Metadata = aboutMetadata;

const About = () => {

  return (
    <MotionWrapper className="h-full w-full mt-36 p-6 text-primary container mx-auto">
      <div className="flex flex-col gap-4 mb-10 text-primary items-center justify-center px-5 text-center">
        <h1 className="font-extrabold text-5xl">Who We Are!</h1>
      </div>
      <div className="grid grid-cols-1 lg:flex justify-center gap-5">
        {members.map((member) => (
          <AboutUs
            key={member.imgUrl}
            name={member.name}
            imgUrl={member.imgUrl}
            position={member.position}
            description={member.description}
            altName={member.altName}
          />
        ))}
      </div>
      <MotionWrapper className="text-center mt-8">
        <h2 className="capitalize font-bold text-xl">Our Commitment to You!</h2>
        <p>
          Our goal is to change people&apos;s lives by providing the best
          services and opportunities to Tax Companies and Tax Preparers. We do
          business fairly and we don&apos;t keep your hard earned money. We
          provide training and tech-support for all our clients because we
          believe that you deserve a real opportunity.
        </p>
      </MotionWrapper>
    </MotionWrapper>
  );
};

export default About;
