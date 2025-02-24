import React from "react";
import Layout from "../components/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="md:pt-[50px] md:pb-[60px] py-[40px] md:text-center text-start w-full md:text-4xl text-2xl font-semibold text-[#57606F]">
        Privacy Policy
      </div>
      <div className="flex flex-col md:gap-[30px] gap-[20px] justify-center items-start text-[#57606F] text-lg md:mb-[150px] mb-[60px]">
        <span>
          At Cheapernights.com, we respect your privacy and are committed to
          protecting your personal data. This Privacy Policy explains how we
          collect, use, and safeguard your information when you visit our
          website and use our services.
        </span>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Information We Collect
          </div>
          <div>We may collect the following types of information:</div>
          <ul className="list-disc list-inside">
            <li className="ml-4">
              Personal Information: When you contact us or subscribe to our
              services, we may collect your name, email address, and other
              relevant details.
            </li>
            <li className="ml-4">
              Usage Data: We gather data about how you interact with our
              website, including IP addresses, browser type, and pages visited.
            </li>
            <li className="ml-4">
              Cookies and Tracking Technologies: We use cookies to enhance your
              experience and analyze site traffic. You can manage cookie
              preferences through your browser settings.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            How We Use Your Information
          </div>
          <div>We use the information we collect to:</div>
          <ul className="list-disc list-inside">
            <li className="ml-4">Provide and improve our services.</li>
            <li className="ml-4">Respond to inquiries and customer support requests.</li>
            <li className="ml-4">Analyze user behavior to enhance website performance.</li>
            <li className="ml-4">Ensure security and prevent fraudulent activities.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Sharing of Information
          </div>
          <div>
            We do not sell or rent your personal data. However, we may share
            your information with:
          </div>
          <ul className="list-disc list-inside">
            <li className="ml-4">
              Third-party service providers that assist in operating our
              website.
            </li>
            <li className="ml-4">
              Legal authorities if required by law or to protect our rights.
            </li>
            <li className="ml-4">
              Advertising and analytics partners to improve user experience and
              provide relevant offers.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Your Rights & Choices
          </div>
          <div>You have the right to:</div>
          <ul className="list-disc list-inside">
            <li className="ml-4">Access, update, or delete your personal information.</li>
            <li className="ml-4">Opt out of marketing communications.</li>
            <li className="ml-4">Disable cookies through browser settings.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">Data Security</div>
          <span>
            We implement security measures to protect your data, but no method
            of transmission over the internet is 100% secure. We encourage you
            to use caution when sharing personal information online.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Third-Party Links
          </div>
          <span>
            Our website may contain links to external websites. We are not
            responsible for the privacy practices of third-party sites and
            encourage you to review their policies.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Changes to This Privacy Policy
          </div>
          <span>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page, and continued use of our services constitutes
            acceptance of the updated policy.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Contact Information
          </div>
          <div className="mb-4">
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <span className="text-[#FF4757]">support@cheapernights.com.</span>
          </div>
          <div>
            By using Cheapernights.com, you acknowledge and agree to these Terms
            of Service. Thank you for choosing us to help you find the best
            vacation rental prices!
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
