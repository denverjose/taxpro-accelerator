import { Metadata } from "next";
import { termsAndConditionsMetadata } from "@/lib/metadata";

export const metadata: Metadata = termsAndConditionsMetadata;

const page = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-6 lg:px-20 pt-32 text-wrap md:text-justify text-primary rounded-lg shadow-lg">
      <div className="align-self-center text-center">
        <h1>MOBILE MESSAGING TERMS AND CONDITIONS</h1>
        <p>
          This Privacy Policy explains how Metaverse Group dba TaxPro
          Accelerator, (&quot;we&quot;, &quot;us&quot;,
          &quot;our(&lsquo;s)&quot;) operates a mobile messaging program (the
          &quot;Program&quot;) subject to these Mobile Messaging Terms and
          Conditions (these &quot;Mobile Messaging Terms&quot;). The Program and
          our collection and use of your personal and business information is
          also subject to our Privacy Policy located right next to this policy.
          By enrolling, signing up, or otherwise agreeing to participate in the
          Program, you accept and agree to these Mobile Messaging Terms and our
          Privacy Policy, and our Sotware Service Agreements.
        </p>
        <br />
        <p>Most Recent Update: 8/13/{currentYear}</p>
        <br />
      </div>
      <div>
        <h4>PROGRAM DESCRIPTION</h4>
        <p>
          We may send promotional and transactional mobile messages in various
          formats through the Program. Promotional messages advertise and
          promote our products and services and may include; promotions,
          specials, other marketing offers, and abandoned checkout reminders.
        </p>
        <br />
        <p>
          Transactional messages relate to an existing or ongoing transaction
          and may include; order notifications and updates, appointment
          reminders, and other transaction-related information.
        </p>
        <br />
        <p>
          Mobile marketing messages may be sent using an automated technology,
          including an autodialer, automated system, or automatic telephone
          dialing but will not exceed 2 messages per user per month. You agree
          that we, our affiliates, and any third-party service providers may
          send you messages regarding the foregoing topics or any topic and that
          such messages and/or calls may be made or placed using different
          telephone numbers or short codes, except in connection with marketing
          purposes. We do not charge for mobile messages sent through the
          Program but you are responsible for any message and data rates imposed
          by your mobile provider, if any, as standard data and message rates
          may apply for short message service and multimedia message alerts.
        </p>
        <br />
        <p>
          Mobile direct messages are used to provide the following; tech
          support, product support, checkout support, and to provide follow ups
          on inquiries. You agree that we, may send you messages regarding the
          foregoing topics or any topic and that such messages and/or calls may
          be made or placed using our telephone numbers or short codes. We do
          not charge for mobile messages sent through the Program but you are
          responsible for any message and data rates imposed by your mobile
          provider, if any, as standard data and message rates may apply for
          short message service and multimedia message alerts.
        </p>
        <br />
      </div>
      <div>
        <h4>USER OPT-IN</h4>
        <p>
          By providing your mobile phone number to us, you are voluntarily
          opting in to the Program and you agree to receive recurring mobile
          messages from us at the mobile phone number associated with your
          opt-in, even if such number is registered on any state or federal
          &quot;Do Not Call&quot; list. You agree that any mobile phone number
          you provide to us is a valid mobile phone number of which you are the
          owner or authorized user. If you change your mobile phone number or
          are no longer the owner or authorized user of the mobile phone number,
          you agree to promptly notify us at [ admin@taxproaccelerator.com ].
          Your participation in the Program does not require that you make any
          purchase from us and your participation in the Program is completely
          voluntary.
        </p>
        <br />
        <p>
          We do not sell, rent or lease your personal or business information
        </p>
        <br />
      </div>
      <div>
        <h4>USER OPT-OUT AND SUPPORT</h4>
        <p>
          You may opt-out of the Program at any time. If you wish to opt-out of
          the Program and stop receiving mobile messages from us, or you no
          longer agree to these Mobile Messaging Terms, reply STOP, QUIT,
          CANCEL, OPT-OUT, and/or UNSUBSCRIBE to the mobile number the message
          is sent from. You may continue to receive text messages for a short
          period while we process your request and you may receive a one-time
          opt-out confirmation message. You understand and agree that the
          foregoing is the only reasonable method of opting out. If you want to
          join the Program again, just sign up as you did the first time, and we
          will start sending messages to you again. For support, reply HELP to
          any mobile message from us.
        </p>
        <br />
        <p>
          Our mobile messaging platform may not recognize requests that modify
          the foregoingcommands, and you agree that we and our service providers
          will not be liable for failing tohonor requests that do not comply
          with the requirements in these Mobile Messaging Terms.We may also
          change the telephone number or short code we use to operate the
          Program and we will notify you of any such change. You acknowledge
          that any requests sent to a telephone number or short code that has
          been changed may not be received by us and we will not be responsible
          for failing to honor a request sent to a telephone number or short
          code that has been changed.
        </p>
        <br />
      </div>
      <div>
        <h4>DISCLAIMER OF WARRANTY AND LIABILITY</h4>
        <p>
          If you wish to unsubscribe from our email campaigns, please click on
          the Unsubscribe link at the bottom of any sms message, and sms or
          marketing email, sent from us. If you wish to stop receiving text
          messages from us, reply STOP, QUIT, CANCEL, OPT-OUT, or UNSUBSCRIBE to
          any text message sent from us. For more information, see our Mobile
          Messaging Terms and Conditions available at on our website right next
          to the Privacy Policy link.
        </p>
        <br />
      </div>
      <div>
        <h4>YOUR PRIVACY RIGHTS</h4>
        <p>
          The data collected from you is ordinary and necessary to conduct
          business and business transactions. You have the right to decline the
          checkout process, or decline services. In the event that you terminate
          services we only keep the necessary data for business records and as
          required by law.
        </p>
        <br />
      </div>
      <div>
        <h4>CHANGES TO THE THIS PRIVACY POLICY</h4>
        <p>
          We may update this Privacy Policy at any time. Please review it
          frequently.
        </p>
        <br />
      </div>
      <div>
        <h4>CONTACT INFORMATION</h4>
        <p>
          If you have any questions about this policy or our privacy practices,
          please &nbsp;
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
