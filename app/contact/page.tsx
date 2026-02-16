import type { Metadata } from "next";
import InlineCalendly from "@/components/contact/inline-calendly";
import { contactMetadata } from "@/lib/metadata";

export const metadata: Metadata = contactMetadata;

const Page = () => {
  return (
    <div className="md:pt-20 pt-32 px-5">
      <div className="hidden">
      {/* <div className="text-white"> */}
        <h1>TaxPro Accelerator - Schedule an Appointment to discuss your needs</h1>
      </div>
      <InlineCalendly />
    </div>
  );
};

export default Page;
