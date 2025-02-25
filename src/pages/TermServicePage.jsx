import React from "react";
import Layout from "../components/Layout";

const TermServicePage = () => {
  return (
    <Layout>
      <div className="md:pt-[50px] md:pb-[60px] py-[40px] md:text-center text-start w-full md:text-4xl text-2xl font-semibold text-[#57606F]">
        Terms of Service
      </div>
      <div className="flex flex-col md:gap-[30px] gap-[20px] justify-center items-start text-[#57606F] text-lg md:mb-[150px] mb-[60px]">
        <span>
          Welcome to Cheapernights.com! By using our website and services, you
          agree to the following Terms of Service. Please read them carefully.
        </span>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Acceptance of Terms
          </div>
          <span>
            By accessing or using Cheapernights.com, you acknowledge that you
            have read, understood, and agreed to these Terms of Service. If you
            do not agree, please do not use our website.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Service Description
          </div>
          <span>
            Cheapernights.com is a vacation rental price comparison tool that
            allows users to find the best prices across multiple booking
            platforms. We do not process bookings or payments, and we are not
            responsible for the accuracy of listings on third-party websites.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            User Responsibilities
          </div>
          <ul className="list-disc list-inside">
            <li>You must be at least 18 years old to use our services.</li>
            <li>
              You agree not to use our website for any unlawful or fraudulent
              purposes.
            </li>
            <li>
              You understand that rental prices and availability are subject to
              change and are controlled by third-party platforms.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Third-Party Links
          </div>
          <span>
            Our website may contain links to third-party booking platforms. We
            do not control or endorse these websites and are not responsible for
            their content, pricing, policies, or transactions.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Limitation of Liability
          </div>
          <span>
            Cheapernights.com is a price comparison tool and does not guarantee
            the availability or accuracy of rental listings. We are not
            responsible for any disputes, cancellations, or issues that may
            arise with third-party bookings.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Intellectual Property
          </div>
          <span>
            All content, logos, and trademarks on Cheapernights.com are the
            property of their respective owners. You may not copy, modify, or
            distribute any content without permission.
          </span>
        </div>
        <div>
          <div className="font-semibold text-xl mb-[10px]">
            Changes to Terms{" "}
          </div>
          <span>
            We may update these Terms of Service at any time. Changes will be
            posted on this page, and your continued use of our services
            constitutes acceptance of the updated terms.{" "}
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

export default TermServicePage;
