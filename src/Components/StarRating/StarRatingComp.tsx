import * as React from "react";

interface StarRatingComponentProps {
  name: string;
  value: number;
  starCount?: number;
  onStarClick?: (nextValue: number) => void;
  starColor?: string;
  emptyStarColor?: string;
  editing?: boolean;
  starSize?: string;
}

const StarRatingComponent: React.FC<StarRatingComponentProps> = ({
  name,
  value,
  starCount = 5,
  onStarClick,
  starColor = "#ffd700",
  emptyStarColor = "#333",
  editing = true,
  starSize = "text-2xl",
}) => {
  const [hoverValue, setHoverValue] = React.useState<number>(0);

  const handleClick = (nextValue: number) => {
    if (onStarClick) {
      onStarClick(nextValue);
    }
  };

  const handleMouseEnter = (starValue: number) => {
    if (editing) {
      setHoverValue(starValue);
    }
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  return (
    <div className="star-rating flex">
      {[...Array(starCount)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= (hoverValue || value);

        return (
          <span
            key={index}
            className={`star ${starSize}`}
            style={{
              color: isFilled ? starColor : emptyStarColor,
              cursor: editing ? "pointer" : "default",
            }}
            onClick={() => editing && handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRatingComponent;
