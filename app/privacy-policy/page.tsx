
import { Metadata } from "next";
import { privacyPolicyMetadata } from "@/lib/metadata";

export const metadata: Metadata = privacyPolicyMetadata

const page = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="lg:px-20 pt-32 break-words text-wrap md:text-justify text-primary rounded-lg shadow-lg w-full">
      <div className="align-self-center text-center">
        <h1>PRIVACY POLICY</h1>
        <p>
          This Privacy Policy explains how Metaverse Group dba TaxPro
          Accelerator collects, uses and discloses personal information of its
          customers, prospective customers, and visitors to its website at
          taxproaccelerator.com
        </p>
        <br />
        <p>Most Recent Update: 8/13/{currentYear}</p>
        <br />
      </div>
      <div className="">
        <h4>COLLECTION OF PERSONAL INFORMATION</h4>
        <p>
          Information collected directly from you: We may collect personal information directly from you, for example; through web forms during an online or in-person registration, while making a purchase, while setting up an account with us, when you contact us for customer support, or at checkout. Personal information we collect directly from you may include, but not limited to; first and last name, address, email address, phone number, and pertinent business related information to complete your software application build-out.
        </p>
        <br />
        <p>
          Information collected from your device: Our website may use tracking technologies such as cookies, web beacons, pixels, and other similar technologies to automatically collect certain information from your device, including for example; your IP address, browser and operating system information, geographic location, referring website address, and other information about how you interact with the website. Our website may also use cookies to personalize your experience and enable certain features; such as keeping track of items you put in your shopping cart. You may disable cookies in your web browser however parts of our website may not function properly. More information about blocking and deleting cookies is available at 
          <a
            className="custom-privacy-terms-conditions"
            href="http://www.allaboutcookies.org"
            target="_blank"
            rel="noreferrer"
          >
            http://www.allaboutcookies.org
          </a>. Our email campaigns may also use tracking technologies such as web beacons, pixels and other similar technologies to automatically collect certain information such as your IP address, browser type and version, and email engagement statistics. Information collected from our advertising partners: We may collect personal information about you from our advertising partners. Personal information we collect from our advertising partners may include; your demographic information, shopping history, and geographic location.
        </p>
        <br />
      </div>
      <div>
        <h4>USE OF PERSONAL INFORMATION</h4>
        <p>
          We use information collected directly from you to provide you with our products and services, customer service and support, and other relevant information. We may also use this information to market our products and services to you, including by email and text message subject to your consent. We use information collected automatically from your device to provide our website to you, to optimize our website, and to assist with our advertising and marketing efforts. We may also use information collected from you and information collected from your device to send you abandoned cart reminders if you added items to your shopping cart but did not complete check out. We use information collected from our advertising partners to market our products and services to you.
        </p>
        <br />
        <p>
          We do not sell, rent or lease your personal or business information
        </p>
        <p>
          SMS opt-in or phone numbers for the purpose of SMS are not being shared.
        </p>
        <br />
      </div>
      <div>
        <h4>DISCLOSURE OF PERSONAL INFORMATION</h4>
        <p>
          We may use third-party service providers to assist us with providing
          our products and services to you and we may share your information
          with such third parties for these limited purposes. The data shared is
          specified in the Service Agreement before you make a purchase. You are
          required to agree to all Terms and Conditions prior to begining the
          checkout.
        </p>
        <br />
        <ul className="ml-5 list-disc list-inside">
          <br />
          <li>
            We may share your personal information if necessary to comply with
            applicable laws and regulations, to respond to a subpoena, search
            warrant or other lawful request for information we receive, or to
            otherwise protect our rights.
          </li>
          <br />
          <li>
            We do not sell, rent, or lease your personal or business information
          </li>
          <li>
            SMS opt-in or phone numbers for the purpose of SMS are not being shared.
          </li>
          
        <br />
        </ul>
      </div>
      <div>
        <h4>EMAIL AND TEXT MESSAGE COMMUNICATIONS</h4>
        <p>
          If you wish to unsubscribe from our email campaigns, please click on the Unsubscribe link at the bottom of any sms message, and sms or marketing email, sent from us. If you wish to stop receiving text messages from us, reply STOP, QUIT, CANCEL, OPT-OUT, or UNSUBSCRIBE to any text message sent from us. For more information, see our Mobile Messaging Terms and Conditions available at on our website right next to the Privacy Policy link.
        </p>
        <br />
      </div>
      <div>
        <h4>EXCLUSION</h4>
        <p>
          All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </p>
      </div>
      <br />
      <div>
        <h4>YOUR PRIVACY RIGHTS</h4>
        <p>
          The data collected from you is ordinary and necessary to conduct business and business transactions.  You have the right to decline the checkout process, or decline services.  In the event that you terminate services we only keep the necessary data for business records and as required by law.
        </p>
        <br />
      </div>
      <div>
        <h4>CHANGES TO THE THIS PRIVACY POLICY</h4>
        <p>
          We may update this Privacy Policy at any time. Please review it frequently.
        </p>
        <br />
      </div>
      <div>
        <h4>CONTACT INFORMATION</h4>
        <p>
          If you have any questions about this policy or our privacy practices, please&nbsp;
          <a
            className="custom-link-yellow-500"
            href="mailto:admin@taxproaccelerator.com"
          >
            <strong>send us an email</strong>
          </a>
          .
        </p>
        <br />
      </div>
    </div>
  );
};

export default page;
