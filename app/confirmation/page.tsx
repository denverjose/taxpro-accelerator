import Confirmation from "@/components/confirmation/confirmation";
import { Metadata } from "next";
import { confirmationMetadata } from "@/lib/metadata";

export const metadata: Metadata = confirmationMetadata;

export default function page() {
  return (
    <>
      <Confirmation />
    </>
  );
}
