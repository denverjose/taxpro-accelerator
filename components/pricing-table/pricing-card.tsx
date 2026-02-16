import { PricingCardMotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import Link from "next/link";
import { features } from "@/lib/constants/features-constants";

const PricingCard = ({ products }: any) => {
  return (
    <>
      {products.map((product: any, index: number) => {

        const dateString = product?.promo_date;
        const parsedDate = new Date(Date.parse(dateString));
        const currentDate = new Date();
        const isPromo = parsedDate && parsedDate > currentDate ? true : false;

        return (
          <PricingCardMotionWrapper
            key={index}
            index={index + 1}
            className={`flex flex-col relative text-primary md:text-center max-w-[440px] w-full py-10 lg:pt-5 px-6 text-xl mx-auto rounded-[20px] border ${
              product.recommended
                ? "bg-background-pricing-card-recommended border-border-table-recommended"
                : "bg-background-pricing-card border-border-pricing-card"
            }`}
          >
            <div className="py-3 px-3 min-h-[192px] border-b border-border-table-list flex flex-col justify-center items-center">
              <h2 className="text-[22px] font-semibold text-center flex flex-col">
                {product.product_name === "Service Bureau Incubator" ? (
                  product.product_name
                ) : (
                  <>
                    <span>{product.product_name.split(" ")[0]}</span>
                    <span>{product.product_name.split(" ")[1]}</span>
                  </>
                )}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm line-through font-semibold text-danger">
                  {isPromo ? `$${product.product_price}` : null}
                </span>
                <div className="flex flex-col justify-center items-center p-2 space-y-2">
                  <h2 className="text-5xl font-bold">
                    $
                    {isPromo
                      ? product.product_price - product.product_discount
                      : product.product_price}
                  </h2>
                  <h3 className="text-base">Per year</h3>
                </div>
              </div>
              {isPromo ? (
                <p className="text-xs text-danger">
                  Expires: {product.promo_date}
                </p>
              ) : null}
            </div>
            <ul className="text-base h-full ">
              {product.product_features.map((feature: any, index: number) => {
                const foundFeature = features.find(
                  (item: any) => item.label === feature
                );

                if (foundFeature) {
                  return (
                    <li
                      key={index}
                      className="features-table-small features-table-medium h-max"
                    >
                      <p className="lg:hidden">{feature}</p>
                      {product.recommended &&
                      product.product_name === "TaxPro Accelerator" ? (
                        <BlueCheckIcon />
                      ) : product.product_name === "TaxPro Incubator" ? (
                        <RedCheckIcon />
                      ) : (
                        <OrangeCheckIcon />
                      )}
                    </li>
                  );
                }

                return null;
              })}
            </ul>
            <Link href={`/product/${product.product_name}`} className="w-full">
              <button className="mt-10 bg-background-pricing-card-button py-4 md:py-[18px] text-base rounded-full w-full hover:scale-105 duration-500 hover:bg-background-pricing-card-button-hover hover:text-primary">
                <span className="font-bold uppercase text-base">
                  Get Started!
                </span>
              </button>
            </Link>
            {product.recommended && (
              <div className="absolute text-sm py-2 px-3 rounded-full bg-background-recommended-sticker rotate-45 -right-6 top-5 font-semibold">
                Recommended
              </div>
            )}
          </PricingCardMotionWrapper>
        );
      })}
    </>
  );
};

export default PricingCard;

export const BlueCheckIcon: React.FC = () => {
  return (
    <div className="features-checked bg-blue-check-background">
      <svg
        className="p-1 h-full w-full text-blue-check"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    </div>
  );
};

export const RedCheckIcon: React.FC = () => {
  return (
    <div className="features-checked bg-red-check-background">
      <svg
        className="p-1 h-full w-full text-red-check"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    </div>
  );
};
export const OrangeCheckIcon: React.FC = () => {
  return (
    <div className="features-checked bg-orange-check-background">
      <svg
        className="p-1 h-full w-full text-orange-check"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    </div>
  );
};
