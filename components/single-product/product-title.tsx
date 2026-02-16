import { ProductTitleProps } from "@/lib/types";


const ProductTitle = ({ name, description }: ProductTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 mx-auto text-pretty px-6 md:px-0">
      <h1 className="hidden">TaxPro Accelerator - Including Tax Software, Training, Mentorship, Tech Support, and More</h1>
      <h2 className="font-bold text-4xl text-baseblue text-center">{name}</h2>
      <h2 className="tracking-wide text-basetext text-wrap text-justify text-sm">
        {description}
      </h2>
    </div>
  );
};

export default ProductTitle;
