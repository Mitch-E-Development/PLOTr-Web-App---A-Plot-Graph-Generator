import React from "react";

const Plot = ({plotIMG}) => {
  console.log('plot image', plotIMG)
  return (
    <div 
      className="
        lg:w-3/4 
        p-10 
        flex 
        justify-center 
        items-center 
        h-[70vh] 
        md:h-[100vh] 
        bg-gray-700">
      <img
        className="text-white text-xl text-center" 
        src={`data:image/png;base64,${plotIMG}`} 
        alt="Once created, your plot will be displayed here..."
      />
    </div>
  );
};

export default Plot;
