"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

const HeaderButton = () => {
  const [isChecked, setIsChecked] = useState(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone");
    alert(`Telephone number: (${phone})`);
  };

  return (
    <MotionWrapper className="flex flex-col items-center gap-2 mt-20">
      <div className="w-max mx-auto h-max bg-white rounded-md">
        <motion.button
          /* @ts-ignore */
          initial={{ "--x": "100%", scale: 1 }}
          /* @ts-ignore */
          animate={{ "--x": "-100%" }}
          whileTap={{ scale: 0.97 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
              type: "spring",
              stiffness: 10,
              damping: 5,
              mass: 0.1,
            },
          }}
          disabled={isChecked}
          className={
            isChecked
              ? "text-muted cursor-not-allowed subscribe-button linear-mask"
              : "subscribe-link cursor-pointer subscribe-button linear-mask"
          }
        >
          <a
            href={
              isChecked
                ? undefined
                : "sms:+12293553025?body=Please subscribe me to your updates"
            }
            onClick={(e) => {
              if (isChecked) {
                e.preventDefault();
              }
            }}
          >
            Click here to text us and subscribe for updates
          </a>
        </motion.button>
      </div>
      <div className="text-center px-6">
        <input
          type="checkbox"
          name="subscribe"
          id="subscribe"
          className="text-primary bg-blue-500"
          onChange={() => setIsChecked((prevChecked) => !prevChecked)}
        />
        <label htmlFor="subscribe" className="ml-2 text-sm">
          By checking the box, you agree to our terms, conditions, and privacy
          policy.
        </label>
      </div>
      <div className="flex gap-4 justify-center">
        <Link
          className="custom-link-footer text-xs"
          href="/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </Link>
        <Link
          className="custom-link-footer text-xs"
          href="/mobile-terms-conditions"
          target="_blank"
          rel="noreferrer"
        >
          Mobile Terms & Conditions
        </Link>
      </div>
    </MotionWrapper>
  );
};

export default HeaderButton;
