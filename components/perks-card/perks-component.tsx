import PerksCard from "./perks-card";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const PerksComponent = ({ perks, className }: any) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4">
        {perks?.map((feature: any, index: any) => (
          <MotionWrapper key={index}>
            <PerksCard feature={feature} />
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};

export default PerksComponent;
