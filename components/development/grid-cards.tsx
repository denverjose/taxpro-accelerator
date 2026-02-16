import { PricingCardMotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
interface Props {
  title: string;
  description: string;
  index: number;
}

const GridCards = ({ title, description, index }: Props) => {
  return (
    <PricingCardMotionWrapper
      index={index}
      className="py-10 px-6 bg-background-card xs:pt-12 lg:pt-16 lg:pb-14 rounded-[20px]"
    >
      <h3 className="text-xl font-bold">
        {index}. {title}
      </h3>
      <p className="text-subheading">{description}</p>
    </PricingCardMotionWrapper>
  );
};

export default GridCards;
