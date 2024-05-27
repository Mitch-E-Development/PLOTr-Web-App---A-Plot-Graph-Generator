import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const SummaryCard = ({ name, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        onClick={handleFlip}
        className="
          relative
          flex 
          flex-col 
          justify-center 
          items-center 
          rounded-lg 
          min-h-[200px] 
          bg-gray-200 
          shadow-black
          hover:shadow-indigo-500 
          shadow-lg 
          text-center 
          space-y-4  
          p-4 
        "
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        <h3
          className="text-3xl relative z-10 text-white font-semibold"
        >
          {name}
        </h3>
      </div>

      <div
        onClick={handleFlip}
        className="
          flex 
          flex-col 
          justify-center 
          items-center 
          rounded-lg 
          p-8 
          min-h-[200px] 
          bg-gray-200 
          shadow-lg 
          shadow-indigo-500 
          text-center 
          space-y-4"
      >
        <p className="text-xl">{description}</p>
      </div>
    </ReactCardFlip>
  );
};

export default SummaryCard;
