import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SearchResultPage = () => {
  const dummyResults = [
    {
      id: 1,
      title: "First Blog Post",
      description: "This is a short description of the first blog post.",
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Second Blog Post",
      description: "This is a short description of the second blog post.",
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Third Blog Post",
      description: "This is a short description of the third blog post.",
      image: "path/to/image3.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full p-4 mt-[100px]" style={{ background: "linear-gradient(to bottom, #F5F5F5, #ffffff)" }}>
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyResults.map((result) => (
            <div key={result.id} className="border rounded-lg p-4">
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-2">{result.title}</h2>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResultPage;
