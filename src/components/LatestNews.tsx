import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogPosts from "../constant/blogs";

const LatestNews = () => {
  return (
    <section className="latest-news py-10  px-[15px] md:mt-[150px] mt-[100px] flex flex-col justify-center items-center">
      <motion.div 
        className="text-[36px] text-[#57606F] font-semibold mb-[60px] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Latest News
      </motion.div>
      <div className="flex md:flex-row flex-col gap-[30px] mb-[60px] flex-wrap justify-center">
        {blogPosts.map(
          (post, index) =>
            index < 3 && (
              <motion.div
                key={post.id}
                className="overflow-hidden max-w-[430px] w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto aspect-[430/300] object-cover rounded-[10px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
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
              </motion.div>
            )
        )}
      </div>
      <motion.div 
        className="text-lg font-semibold text-white py-[10px] px-[40px] rounded-[10px] bg-[#FF4757]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="/blog">All News</a>
      </motion.div>
    </section>
  );
};

export default LatestNews;