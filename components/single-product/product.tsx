import ProductTitle from "./product-title";
import Features from "./features";
import { ProductProps } from "@/lib/types";

const Product = ({
  id,
  promoDate,
  name,
  description,
  features,
  price,
  discountPrice,
  isPromo,
}: ProductProps) => {
  // console.log(name)
  return (
    <div>
      <ProductTitle name={name} description={description} />
      {/* <Features /> */}
      <div className="py-3 px-3 flex flex-col justify-center items-center mt-8">
        <div className="flex flex-col justify-center items-center p-4 space-y-3 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg shadow-lg">
          {/* Original Price with Strikethrough */}
          {isPromo && (
            <span className="text-lg line-through font-semibold text-dark">
              ${price}
            </span>
          )}

          {/* Discounted Price */}
          <div className="flex flex-col justify-center items-center space-y-1">
            <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
              <span className="animate-bounce">
                ${isPromo ? discountPrice : price}{" "}
              </span>
              <span className="text-lg font-medium text-white ">Per Year</span>
            </h2>
          </div>

          {/* Offer Expiration Date */}
          {isPromo ? (
            <p className="text-sm font-semibold text-dark italic">
              Offer Expires: {promoDate}
            </p>
          ) : null}
        </div>
      </div>
      <Features />
    </div>
  );
};

export default Product;
