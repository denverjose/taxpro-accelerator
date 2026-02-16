"use client";

import { useRouter } from "next/navigation";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import React, { useState, useEffect } from "react";
import config from "@/env-config";

const revalidate = 0;

const Confirmation: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [data, setData] = useState<object | null>(null);
  const router = useRouter();

  let jotform = config.JOTFORM_URL_SERVICE_BUREAU;

  const checkJotformLink = (res: any) => {
    /* @ts-ignore */
    if (res?.product_name === "TaxPro Incubator") jotform = config.JOTFORM_URL_TAXPRO_INCUBATOR;
    /* @ts-ignore */
    else if (res?.product_name === "TaxPro Accelerator") jotform = config.JOTFORM_URL_TAXPRO_ACCELERATOR;
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    try {
      if (query.get("session_id")) {
        setSessionId(query.get("session_id"));
        if (data === null) {
          (async function () {
            const response = await fetch("/api/stripe-retrieve-session", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ sessionId: query.get("session_id") }), // Ensure you send the correct product ID or other needed info
            });
            const res = await response.json();
            setStatus("success");
            setData(res);
            
            checkJotformLink(res)
  
            try {
              const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                  email: res.client.email,
                  name: res.client.name, 
                  product_name: res.product_name, 
                  documentUploadUrl: config.NEXT_PUBLIC_JOTFORM_UPLOAD,
                  serviceAgreementUrl: jotform,
                }),
              });
        
              if (response.ok) {
                alert('Please check your email! We sent the instructions to setup your software.');
              } else {
                alert('Failed to send email.');
              }
            } catch (error) {
              console.error('Error on api:', error);
              alert('An error occurred. Please Try again.');
              setData(null)
              setSessionId(null)
              setStatus("no purchase")
              navigateTaxSoftware()

            }
          })();
        }
      } else if (query.get("cancelled")) {
        setStatus("cancelled");
        navigateTaxSoftware();
      } else {
        setStatus("no purchase");
        navigateTaxSoftware();
      }
    } catch (error) {
      console.error("error:",error)
    }
  }, [data]);

  const navigateHome = () => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  const navigateTaxSoftware = () => {
    setTimeout(() => {
      router.push("/services/tax-software");
    }, 3000);
  };

  checkJotformLink(data)

  const Success: React.FC = () => (
    <div className="min-h-[80vh] mt-36 mb-20 mx-auto flex items-center">
      <div className="p-6 w-full text-center text-primary bg-background-card rounded-[24px] shadow-lg">
        <h1 className="text-xl font-semibold mb-4">
          {/* @ts-ignore */}
          Complete the below steps to begin your {data?.product_name} software
          setup
        </h1>
        <div className="confirmation-box">
          <p className="text-base mb-2">Your Stripe session ID is:</p>
          <ul>
            <li className="font-bold break-all">{sessionId}</li>
            <li className="mt-2">
              <p>
                Copy it for your records. You can use this ID to find the
                purchase in your Stripe Dashboard.
              </p>
            </li>
          </ul>
        </div>
        <div className="confirmation-box">
          <p className="text-lg mb-4">
            Upload your documents using our secure form:
          </p>
          <ul>
            <li className="mb-2">
              <a
                href={config.NEXT_PUBLIC_JOTFORM_UPLOAD}
                className="confirmation-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click To Open The Secure Form
              </a>
            </li>
            <li>Your information and documents are encrypted.</li>
          </ul>
        </div>
        <div className="confirmation-box">
          <ul>
            <li className="mb-2">Complete the agreement & submit it.</li>
            <p className="text-lg mb-4">
              <a
                href={jotform}
                className="confirmation-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click To Open The Service Agreement
              </a>
            </p>
            <li>You&apos;ll receive the signed agreement via email.</li>
          </ul>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={navigateHome}
          >
            Go Back To The Homepage
          </button>
        </div>
      </div>
    </div>
  );

  const Cancelled: React.FC = () => (
    <div className="min-h-[80vh] mx-auto flex items-center">
      <div className="p-6 w-full mx-auto text-center text-white bg-background-card rounded-[24px] shadow-lg">
        <h5 className="text-xl font-semibold mb-4">
          Your transaction was canceled
        </h5>
        <h5 className="text-lg mb-2">Please check your info and try again.</h5>
        <h5 className="text-lg mb-4">Going back to Tax Software</h5>
      </div>
    </div>
  );

  const NoPurchases: React.FC = () => (
    <div className="text-white h-[80vh]  mx-auto text-center w-96 pt-48 pb-48">
      <h5>You don&apos;t have any current purchases</h5>
      <h5>Going to Tax Software</h5>
    </div>
  );

  return (
    <div id="contact" className="px-5 md:px-6 relative">
      {status === "" && data === null ? (
        <div className="h-[90vh] flex justify-center items-center">
          <div className="text-center">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
        </div>
      ) : (
        <MotionWrapper className="flex mx-auto">
          {status === "success" && <Success />}
          {status === "cancelled" && <Cancelled />}
          {status === "no purchase" && <NoPurchases />}
        </MotionWrapper>
      )}
    </div>
  );
};

export default Confirmation;
