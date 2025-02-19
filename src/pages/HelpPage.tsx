import React from "react";
import Layout from "../components/Layout";

const HelpPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Help & FAQs</h1>
      <div className="faq-list">
        <div className="faq-item mb-4">
          <h2 className="text-xl font-semibold">What is this website about?</h2>
          <p>
            This website provides information and resources about our services
            and features.
          </p>
        </div>
        <div className="faq-item mb-4">
          <h2 className="text-xl font-semibold">How can I contact support?</h2>
          <p>
            You can contact support via the contact form on our website or email
            us directly.
          </p>
        </div>
        <div className="faq-item mb-4">
          <h2 className="text-xl font-semibold">
            Where can I find more information?
          </h2>
          <p>
            More information can be found in the About Us and Blog sections of
            our website.
          </p>
        </div>
      </div>
      <a href="/help" className="text-blue-500 underline">
        All FAQs
      </a>
    </Layout>
  );
};

export default HelpPage;
