import React from "react";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

const StarRating = ({ score = 0, maxScore = 5 }) => {
  // Ensure the score is within the valid range
  const clampedScore = Math.min(Math.max(score, 0), maxScore);

  // Calculate the fill percentage for each star
  const calculateFillPercentage = (starIndex) => {
    const starValue = starIndex + 1;
    if (clampedScore >= starValue) {
      return 100; // Fully filled
    } else if (clampedScore > starIndex && clampedScore < starValue) {
      return (clampedScore - starIndex) * 100; // Partially filled
    }
    return 0; // Not filled
  };

  return (
    <div className="flex items-center">
      {[...Array(maxScore)].map((_, index) => {
        const fillPercentage = calculateFillPercentage(index);

        return (
          <div key={index} className="relative">
            <FaStar className="w-4 h-4 text-[#FFC107] opacity-20" />

            <div
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <FaStar className="w-4 h-4 text-[#FFC107] " />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
