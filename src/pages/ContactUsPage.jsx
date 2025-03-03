import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/send-mail`,
        formData
      );
      toast.success('Your message has been sent successfully!', {
        position: "top-right",
        autoClose: 5000, // Close after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("There was an error sending your message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Layout>
      <div className="md:pt-[50px] md:pb-[60px] py-[40px] md:text-center text-start w-full md:text-4xl text-2xl font-semibold text-[#57606F]">
        Contact Us
      </div>
      <div className="md:text-center text-start w-full text-2xl text-[#57606F] md:px-[15vw] 2xl:px-0">
        <div>
          Need help using Cheapernights.com? Our support team is available to
          assist with any questions.
        </div>
        <div>
          You can send us an email at{" "}
          <span className="text-[#FF4757] underline">
            info@cheapernights.com
          </span>{" "}
          or fill the form below
        </div>
      </div>
      <form
        className="w-full md:px-[15vw] 2xl:px-0 md:mt-8 mt-[70px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-[#FF4757] tracking-wide text-xs font-semibold"
              htmlFor="first-name"
            >
              First Name*
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b rounded-none py-3 px-4 leading-tight outline-none bg-transparent border-gray-500"
              id="first-name"
              name="firstName"
              type="text"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-[#FF4757] tracking-wide text-xs font-semibold"
              htmlFor="last-name"
            >
              Last Name*
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b rounded-none py-3 px-4 leading-tight outline-none bg-transparent border-gray-500"
              id="last-name"
              name="lastName"
              type="text"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block text-[#FF4757] tracking-wide text-xs font-semibold"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border-b rounded-none py-3 px-4 leading-tight outline-none bg-transparent border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block text-[#FF4757] tracking-wide text-xs font-semibold"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full text-gray-700 border-b rounded-none py-3 px-4 leading-tight outline-none bg-transparent border-gray-500"
              id="message"
              name="message"
              rows={5}
              placeholder="Write here your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap mt-[60px] mb-[150px]">
          <div className="w-full px-3 flex justify-center items-center">
            <button
              className="bg-[#FF4757] hover:bg-[#e03e4e] text-white font-semibold py-[10px] px-[68.5px] rounded-[10px] focus:outline-none focus:shadow-outline w-full md:w-fit"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ContactUsPage;
