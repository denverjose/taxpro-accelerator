// metadata.tsx
import { Metadata } from "next";
import { clientSupabase } from "@/supabase/front-end-client";
import config from "@/env-config";

export const homepageMetadata: Metadata = {

  title: "Tax Pro Accelerator - Leading in Business Growth and Expansion",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Tax Pro Accelerator is a B2B SaaS that fast-tracks business growth with analytics tools, marketing strategies, and dedicated mentorship for success.",
  openGraph: {
    title:
      "Tax Pro Accelerator - Leading in Business Growth and Expansion",
    description:
      "Tax Pro Accelerator is a B2B SaaS that fast-tracks business growth with analytics tools, marketing strategies, and dedicated mentorship for success.",
  },
  keywords: [
    "software",
    "tax software",
    "tax preparer",
    "taxes to go",
    "tax slayer",
    "tax training",
    "tax office accelerator",
    "service bureau accelerator", 
    "b2b", 
    "software development", 
    "web development", 
    "website development", 
    "business analytics",
  ],
  robots: "index, follow",
};

export const aboutMetadata: Metadata = {
  title: "About Us - Expert Team with 20+ Years in Accelerating Growth",
  description:
    "With 20+ years of experience, our team supports 15K clients and 500 partners. We accelerate your business growth based on your needs and status.",
  openGraph: {
    title: "About Us - Expert Team with 20+ Years in Accelerating Growth",
    description:
      "With 20+ years of experience, our team supports 15K clients and 500 partners. We accelerate your business growth based on your needs and status.",
  },
  keywords: [
    "software",
    "tax software",
    "tax preparer",
    "taxes to go",
    "tax slayer",
    "tax training",
    "tax office accelerator",
    "service bureau accelerator", 
    "b2b", 
    "software development", 
    "web development", 
    "website development", 
    "business analytics",
  ],
  robots: "index, follow",
};

export const contactMetadata: Metadata = {
  title: "Contact Us - Book an Appointment to Accelerate Your Business",
  description: 
    "Schedule an appointment via Calendly to connect with our experts. Let's discuss how we can elevate your business with personalized guidance and support.",
  openGraph: {
    title: "Contact Us - Book an Appointment to Accelerate Your Business",
    description: 
      "Schedule an appointment via Calendly to connect with our experts. Let's discuss how we can elevate your business with personalized guidance and support.",
  },
  keywords: [
    "software",
    "tax software",
    "tax preparer",
    "taxes to go",
    "tax slayer",
    "tax training",
    "tax office accelerator",
    "service bureau accelerator", 
    "b2b", 
    "software development", 
    "web development", 
    "website development", 
    "business analytics",
  ],
  robots: "index, follow",
};

export const confirmationMetadata: Metadata = {
  title: "Order Confirmation - Review Your Purchase and Next Steps",
  description:
    "The confirmation page summarizes your purchase and next steps. Review your order and prepare to accelerate your business with our expert support.",
  openGraph: {
    title: "Order Confirmation - Review Your Purchase and Next Steps",
    description:
      "The confirmation page summarizes your purchase and next steps. Review your order and prepare to accelerate your business with our expert support.",
  },
  robots: "noindex, nofollow",
};

export const termsAndConditionsMetadata: Metadata = {
  title: "Mobile Terms & Conditions - Guidelines for Messaging Services",
  description:
    "Review the Mobile Terms & Conditions for our messaging services. Understand the guidelines for receiving updates, offers, and important information.",
  openGraph: {
    title: "Mobile Terms & Conditions - Guidelines for Client Messaging Services",
    description:
      "Review the Mobile Terms & Conditions for our messaging services. Understand the guidelines for receiving updates, offers, and important information.",
  },
  robots: "index, follow",
};

export const privacyPolicyMetadata: Metadata = {
  title: "Privacy Policy - How We Collect and Protect Your Data",
  description:
    "Our Privacy Policy outlines the data we collect, how we use it, and the measures we take to protect your information and maintain your privacy rights.",
  openGraph: {
    title: "Privacy Policy - How We Collect and Protect Your Data",
    description:
    "Our Privacy Policy outlines the data we collect, how we use it, and the measures we take to protect your information and maintain your privacy rights.",
  },
  robots: "index, follow",
};

export async function servicesMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let title = params.slug.replace(/-/g, " ");
  title = title.replace(/\b\w/g, (char) => char.toUpperCase());

  let description, keywords;

  switch (title) {
    case "Tax Software":
      title = "Tax Software - Comprehensive Training, Mentorship, and Support",
      description =
        "Our Tax Software package offers Tax Slayer Training, ongoing updates, personalized mentorship, and top-tier tech support to help you make informed decisions."
        ;

      keywords = [
        "software",
        "tax software",
        "tax preparer",
        "taxes to go",
        "tax slayer",
        "tax training",
        "tax office accelerator",
        "service bureau accelerator", 
        "b2b", 
        "software development", 
        "web development", 
        "website development", 
        "business analytics",
      ];
      break;

    default:
      title = "Tax Software & Business Solutions - Training, Analytics, and Mentorship for Growth"
      description = "Our Tax Software package offers Tax Slayer Training, ongoing updates, personalized mentorship, and top-tier tech support to help you make informed decisions.";
      keywords = [
        "software",
        "tax software",
        "tax slayer",
        "software training",
        "tax office accelerator",
        "service bureau accelerator", 
        "b2b", 
        "software development", 
        "web development", 
        "website development", 
        "business analytics",
      ];
  }

  return {
    title: title,
    description: description,
    keywords: keywords,
    robots: "index, follow",
  };
}


export async function productsMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let title = params.slug.replace(/%20/g, " ");

  // console.log('products', title)

  const { data: products, error: productsError } = await clientSupabase
    .from("products")
    .select("*")
    .eq("user_id", config.SUPABASE_USER_ID)
    .eq("product_name", title)
    .single();

  if (!products || productsError) {
    // alert();
    console.error("There was an error:", productsError);
    return { title: "", description: "" };
  }

  let description;

  switch (title) {
    case "TaxPro Incubator":
      title = `${title} - Software, Training, Mentorship, & More`;
      description = 'TaxPro Incubator accelerates your business with robust training, EFIN/EIN help, tech support, unlimited e-filing, and marketing mentorship to succeed.';
      break;
    case "TaxPro Accelreator":
      title = `${title} - Software, Training, Mentorship, & More`;
      description = 'TaxPro Accelerator accelerates your tax business with advanced mentorship, e-commerce, financing, corporate website, email, and web-hosting.'
      break;
    case "Service Bureau Incubator":
      title = `${title} - Software, Training, Mentorship, & More`;
      description = 'TaxPro Service Bureau Accelerator transforms your tax company into a software reseller, providing a proven growth model and empowering you to build a network.'
      break;
    default:
      title = "Tax Software - Software, Training, Mentorship, & More"
  }

  return {
    title: title,
    description: description,
    keywords: [
      "software",
      "tax software",
      "tax preparer",
      "taxes to go",
      "tax slayer",
      "tax training",
      "tax office accelerator",
      "service bureau accelerator", 
      "b2b", 
      "software development", 
      "web development", 
      "website development", 
      "business analytics",
    ],
    robots: "index, follow",
  };
}
