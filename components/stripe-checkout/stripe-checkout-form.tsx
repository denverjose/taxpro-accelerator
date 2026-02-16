import { ButtonMotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import Checkbox from "../checkbox/checkbox";

type ProductProps = {
  product_name: string;
  id: string;
  price: number;
};

const StripeCheckoutForm: React.FC<ProductProps> = ({
  product_name,
  id,
  price,
}) => {
  const Form = () => {
    // console.log("id: ", id);

    return (
      <form action="/api/stripe-checkout" method="POST">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="productName" value={product_name} />
        <Checkbox product_name={product_name} />
      </form>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <ButtonMotionWrapper>
        <Form />
      </ButtonMotionWrapper>
    </div>
  );
};

export default StripeCheckoutForm;
