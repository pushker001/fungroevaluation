import React, { useState } from 'react';
import '../FlipCard.css'; // Ensure the path to the CSS file is correct

function FlipCard({ frontContent, backContent }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleTouch = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card-container"
      onMouseEnter={handleTouch} // Trigger flip on touch
    >
      <div className={`text-2xl flip-card ${isFlipped ? 'flip-card-flipped' : ''}`}>
        <div className="flex flex-row flip-card-front bg-green-500 rounded-md text-white flex  p-4">
          {frontContent}
        </div>
        <div className="flip-card-back bg-gray-500 text-white rounded-md flex  justify-center p-4">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
