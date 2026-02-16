import FeatureComparisonList from "./feature-comparison-list";
import { PricingCardMotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import { featuresComparison } from "@/lib/constants/features-constants";

const FeaturesComparisonCard = () => {
  return (
    // index = 0 is the first card to appear
    <PricingCardMotionWrapper
      index={0}
      className="hidden lg:block md:text-center max-w-[440px] w-full pt-10 lg:pt-5 px-6 text-xl mx-auto rounded-[20px] border bg-background-pricing-card border-border-pricing-card z-10"
    >
      <h3 className="lg:min-h-[192px] flex items-center md:min-h-14 lg:text-2xl md:text-[22px] text-center font-bold border-b border-border-table-list">
        Features Comparison
      </h3>
      <ul className="text-base">
        {featuresComparison.map((feature, index) => (
          <FeatureComparisonList key={index} feature={feature} index={index} />
        ))}
      </ul>
    </PricingCardMotionWrapper>
  );
};

export default FeaturesComparisonCard;
