import React from "react";

const FeatureCard = ({ imageUrl, name, description }) => {
  return (
    <div
      className="
        relative
        flex 
        flex-col 
        justify-center 
        items-center 
        rounded-lg 
        min-h-[160px] 
        bg-gray-200 
        shadow-md 
        shadow-indigo-500 
        hover:shadow-lg 
        hover:shadow-green-500 
        text-center 
        justify-between
        gap-10
        p-6
        px-12
        "
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      <h3
        className="
          text-white 
          relative 
          z-10
          text-3xl 
          font-semibold 
          text-center"
      >
        {name}
      </h3>
      <div
        className="
        bg-gray-200/80
        lg:min-h-[200px] 
        flex justify-center 
        items-center 
        p-10 
        rounded-lg 
        shadow-lg
        relative 
        z-10"
      >
        <p className="text-center text-xl">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
