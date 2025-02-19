import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../constant/blogs";
const LatestNews = () => {
  return (
    <section className="latest-news py-10  px-[15px] md:mt-[150px] mt-[100px] flex flex-col justify-center items-center">
      <div className="text-[36px] text-[#57606F] font-semibold mb-[60px] text-center">
        Latest News
      </div>
      <div className="flex md:flex-row flex-col gap-[30px] mb-[60px] flex-wrap justify-center">
        {blogPosts.map(
          (post, index) =>
            index < 3 && (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="overflow-hidden max-w-[430px] w-full"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto aspect-[430/300] object-cover rounded-[10px]"
                />
                <div className="mt-[30px] flex flex-col gap-[5px]">
                  <h3 className="text-xl text-[#57606F] font-semibold">
                    {post.title}
                  </h3>
                  <div className="text-[#FF4757] text-sm font-semibold">
                    {post.date}
                  </div>
                  <p className="text-[#57606F] text-lg">{post.description}</p>
                </div>
              </Link>
            )
        )}
      </div>
      <div className="text-lg font-semibold text-white py-[10px] px-[40px] rounded-[10px] bg-[#FF4757]">
        <a href="/blog">All News</a>
      </div>
    </section>
  );
};

export default LatestNews;
