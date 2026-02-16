import { createClient } from "@/supabase/server-client";
import { clientSupabase } from "@/supabase/front-end-client";
import Product from "@/components/single-product/product";
import StripeCheckoutForm from "@/components/stripe-checkout/stripe-checkout-form";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import { Metadata } from "next";
import config from "@/env-config";
import { productsMetadata } from "@/lib/metadata";

const revalidate = 0;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return productsMetadata({ params });
}

export async function generateStaticParams() {
  const { data: products, error: productsError } = await clientSupabase
    .from("products")
    .select("product_name")
    .eq("user_id", config.SUPABASE_USER_ID);

  if (!products) {
    return [];
  }

  return products?.map(({ product_name }: any) => ({
    slug: product_name.replace(/ /g, "%20"),
  }));
}

export default async function Page({ params }: Props) {
  const supabase = createClient();

  let title = params.slug.replace(/%20/g, " ");

  // Fetch all deal_info records linked to the given user_id
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .eq("user_id", config.SUPABASE_USER_ID)
    .eq("product_name", title)
    .single();

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
  const dateString = products?.promo_date;
  const parsedDate = new Date(Date.parse(dateString));
  const currentDate = new Date();

  const isPromo = parsedDate && parsedDate > currentDate ? true : false;

  return (
    <MotionWrapper className="mb-20  text-primary mt-36">
      <div>
        {!products ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-primary text-4xl animate-pulse">
              Loading...
            </div>
          </div>
        ) : (
          <div className="mb-20 text-primary mt-36">
            <Product
              index={products?.product_price_id}
              recommended={false}
              key={products?.product_price_id}
              isPromo={isPromo}
              promoDate={dateString}
              id={products?.product_price_id}
              name={products?.product_name}
              description={products?.product_description}
              features={products?.product_features}
              price={products?.product_price}

              // price={
              //   isPromo
              //     ? products?.product_price - products?.product_discount
              //     : products?.product_price
              // }
              discountPrice={
                isPromo
                  ? products?.product_price - products?.product_discount
                  : 0
              }
            />
            <StripeCheckoutForm
              product_name={products?.product_name}
              id={products?.product_price_id}
              price={
                isPromo
                  ? products?.product_price - products?.product_discount
                  : products?.product_price
              }
            />
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}
