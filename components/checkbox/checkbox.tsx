"use client";
import { useState } from "react";
import config from "@/env-config";

type ProductName = {
  product_name: string;
};
const Checkbox: React.FC<ProductName> = ({ product_name }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsChecked((prev) => !prev);
  };

  let jotform;
  /* @ts-ignore */
  if (product_name === "TaxPro Incubator") {
    jotform = config.JOTFORM_URL_TAXPRO_INCUBATOR;
    /* @ts-ignore */
  } else if (product_name === "TaxPro Accelerator") {
    jotform = config.JOTFORM_URL_TAXPRO_ACCELERATOR;
  } else {
    jotform = config.JOTFORM_URL_SERVICE_BUREAU;
  }

  return (
    <div className="container flex flex-col justify-center items-center rounded-none bg-background-dark">
      <div>
        <label htmlFor="purchase">
          &nbsp;By Making Payment I Agree With The
          <p className="text-center mb-1">
            <a
              className="confirmation-link"
              href={jotform}
              target="_blank"
              rel="noreferrer"
            >
              Service Contract
            </a>
          </p>
        </label>
      </div>

      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {/* <br />
      <br /> */}
      <div className="relative rounded-full bg-primary animate-bounce mt-8">
        <button
          type="submit"
          role="link"
          className="pointer-events-auto border-0 flex flex-col py-3 px-6 rounded-full bg-background-checkout hover:bg-background-checkout-hover duration-75 font-bold text-lg items-start  text-dark h-full w-full relative linear-mask radial-gradient"
        >
          Purchase Now!
        </button>
      </div>
    </div>
  );
};

export default Checkbox;
