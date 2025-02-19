import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import blogPosts from "../constant/blogs";
import GotQuestion from "./gotQuestion";

const Pagination: React.FC<{
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}> = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const renderPageNumbers = () => {
    const maxPagesToShow = 6;
    const pages: (number | string)[] = [];

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages.map((number, index) => {
      if (typeof number === "string") {
        return (
          <li key={`ellipsis-${index}`} className="page-item md:block hidden">
            <span className="page-link w-[50px] h-[50px] block text-center text-lg font-semibold rounded-[10px] text-[#FF4757]">
              {number}
            </span>
          </li>
        );
      } else {
        return (
          <li
            key={`page-${number}`}
            className={`page-item ${currentPage === number ? "active" : ""} md:block hidden`}
          >
            <button
              onClick={() => paginate(number)}
              className="page-link w-[50px] h-[50px] text-center border text-lg font-semibold rounded-[10px]"
              style={{
                backgroundColor: currentPage === number ? "#FF4757" : "white",
                color: currentPage === number ? "white" : "#FF4757",
                borderColor: "#FF4757",
              }}
            >
              {number}
            </button>
          </li>
        );
      }
    });
  };

  return (
    <nav className="mt-[90px]">
      <ul className="pagination flex justify-center mt-4 gap-[10px]">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link md:w-[50px] h-[50px] py-[10px] px-[54px] md:py-0 md:px-0  text-center border text-lg font-semibold rounded-[10px] flex justify-center items-center"
            style={{
              backgroundColor: "white",
              color: currentPage === 1 ? "rgba(255, 71, 87, 0.5)" : "#FF4757",
              borderColor:
                currentPage === 1 ? "rgba(255, 71, 87, 0.5)" : "#FF4757",
            }}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
            <span className="ps-[10px] block md:hidden">Prev</span>
          </button>
        </li>
        {renderPageNumbers()}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link md:w-[50px] h-[50px] py-[10px] px-[54px] md:py-0 md:px-0 text-center border text-lg font-semibold rounded-[10px] flex justify-center items-center"
            style={{
              backgroundColor: "white",
              color:
                currentPage === totalPages
                  ? "rgba(255, 71, 87, 0.5)"
                  : "#FF4757",
              borderColor:
                currentPage === totalPages
                  ? "rgba(255, 71, 87, 0.5)"
                  : "#FF4757",
            }}
            disabled={currentPage === totalPages}
          >
            <span className="pe-[10px] block md:hidden">Next</span>
            <FaChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BlogGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex  gap-[30px] mb-[60px] flex-wrap justify-center">
        {currentPosts.map((post) => (
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
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <GotQuestion />
    </div>
  );
};

export default BlogGrid;
