import { createClient } from "@/supabase/server-client";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import PricingCard from "./pricing-card";
import FeaturesComparisonCard from "./features-comparison-card";
import config from "@/env-config";
import Perks from "./perks";

const revalidate = 0;

export default async function FeaturesTable() {
  const supabase = createClient();

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", config.SUPABASE_USER_ID)
    .order("id");

  // console.log(products)

  if (!products || productsError) {
    console.error("Error fetching products data:", productsError);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-primary text-4xl animate-pulse">
          Error loading products data...
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
      <Perks />
      <MotionWrapper className="flex flex-col gap-2 items-center justify-center pb-20 text-center">
        <h2 className="font-bold text-3xl xs:text-4xl md:text-5xl capitalize">
          Start your journey today
        </h2>
        <h2 className="text-lg md:text-2xl text-subheading">
          Choose your plan and start now!
        </h2>
        <h2 className="text-lg md:text-2xl mt-5 font-semibold">
          Software and Training in English or Spanish
        </h2>
      </MotionWrapper>
      {/* <Perks /> */}
      <div className="gap-9 md:gap-5 lg:gap-7 grid md:grid-cols-3 lg:grid-cols-4 xs:px-1 md:px-2">
        <FeaturesComparisonCard />
        <PricingCard products={products} />
      </div>
    </div>
  );
}
