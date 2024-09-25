// StarRating.tsx
import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxRating = 5; // Assume the rating is out of 5
  const stars = Array.from({ length: maxRating }, (_, index) => {
    if (rating >= index + 1) {
      return "★"; // Full star
    } else if (rating >= index + 0.5) {
      return "☆"; // Half star (optional)
    } else {
      return "☆"; // Empty star
    }
  });

  return (
    <div className="text-yellow-500">
      {stars.map((star, index) => (
        <span key={index} className="text-xl">
          {star}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
