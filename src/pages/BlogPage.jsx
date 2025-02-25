import React from "react";
import BlogGrid from "../components/BlogGrid";
import Layout from "../components/Layout";

const BlogPage = () => {
  return (
    <Layout>
      <div className="text-[#57606F] text-4xl font-semibold py-[50px]">
        Articles & Guides
      </div>
      <BlogGrid />
    </Layout>
  );
};

export default BlogPage;
