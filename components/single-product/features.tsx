import PerksComponent from "../perks-card/perks-component";
import { singleProductPerks } from "@/lib/constants/perks-constants";

const Features = () => {
  return (
    <PerksComponent
      perks={singleProductPerks}
      className="container lg:mx-auto mt-8 px-4 mx-auto"
    />
  );
};

export default Features;
