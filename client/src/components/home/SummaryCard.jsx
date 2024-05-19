import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const SummaryCard = ({ name, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
      <div
        onClick={handleFlip}
        className="flex flex-col justify-center items-center rounded-lg min-h-[160px] bg-gray-200 shadow-lg hover:shadow-indigo-500 text-center space-y-4"
      >
        <h3 className="text-2xl">{name}</h3>
      </div>

      <div
        onClick={handleFlip}
        className="flex flex-col justify-center items-center rounded-lg p-8 min-h-[160px] bg-gray-200 shadow-lg shadow-indigo-500 text-center space-y-4"
      >
        <p>{description}</p>
      </div>
    </ReactCardFlip>
  );
};

export default SummaryCard;
