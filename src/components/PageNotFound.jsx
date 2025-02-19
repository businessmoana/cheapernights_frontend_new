import React from "react";
import { Link } from "react-router-dom";
const PageNotFoundImageUrl = "/assets/images/404-error.png";
import Layout from "./Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <img
        src={PageNotFoundImageUrl}
        alt=""
        className="w-[430px] h-[343px] mb-[57px] md:mt-[80px] mt-[60px]"
      />
      <h1 className="text-[24px] font-semibold text-[#57606F] mb-[10px]">
        Page Not Found
      </h1>
      <div className="text-[18px] font-semibold text-[#57606F] mb-10 text-center">
        The page you are looking for does not exist. It might have been moved or
        deleted.
      </div>
      <Link
        to="/"
        className="text-[18px] font-semibold text-white py-[10px] px-10 rounded-[10px] bg-[#FF4757] mb-[150px]"
      >
        Back to Homepage
      </Link>
    </Layout>
  );
};

export default PageNotFound;
