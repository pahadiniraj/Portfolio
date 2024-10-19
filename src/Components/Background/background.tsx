import React from "react";

const BackgroundComponent = () => {
  return (
    <div className="area">
      <ul className="circles">
        {/* Add 30 circle elements for animation */}
        {[...Array(30)].map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
};

export default BackgroundComponent;
