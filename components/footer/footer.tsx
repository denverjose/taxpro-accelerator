import FooterLinks from "./footer-links";
import Logo from "../navbar/logo";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <MotionWrapper
      viewport={false}
      className="flex flex-col items-center justify-center border-t-2 border-white text-primary px-4 pb-24 md:pb-4 pt-4 text-center"
    >
      <Logo />
      <div className="flex justify-center items-center gap-7 w-full">
        <FooterLinks />
        <div className="flex flex-col ">
          <Link
            href="/privacy-policy"
            className="custom-link-footer"
            target='_blank'
            rel="noreferrer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/mobile-terms-conditions"
            className="custom-link-footer"
            target='_blank'
            rel="noreferrer"
          >
            Mobile Terms & Conditions
          </Link>
        </div>
      </div>
      <span className="mt-2">Copyright ©{currentYear} Metaverse Group.</span>
    </MotionWrapper>
  );
};

export default Footer;
