import PerksComponent from "../perks-card/perks-component";
import { pricingTablePerks } from "@/lib/constants/perks-constants";

const Perks = () => {
  return (
    <PerksComponent
      className="container mx-auto pb-20"
      perks={pricingTablePerks}
    />
  );
};

export default Perks;
