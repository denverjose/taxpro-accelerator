export interface Feature {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export interface ProductProps {
  id: string;
  promoDate: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  discountPrice: number;
  isPromo: boolean;
  key: number;
  index: number;
  recommended: boolean;
}

export interface ProductTitleProps {
  name: string;
  description: string;
}

export interface SendConfirmationEmailProps {
  email: string;
  name: string;
  documentUploadUrl: string;
  serviceAgreementUrl: string;
  productName: string;
}