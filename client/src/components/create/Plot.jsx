import React from "react";

const Plot = ({plotIMG}) => {
  console.log('plot image', plotIMG)
  return (
    <div className="lg:w-3/4 flex w-full justify-center items-center min-h-[100vh] bg-white">
      <img
        className="" src={`data:image/png;base64,${plotIMG}`} alt="Base64 Plot"
      />
    </div>
  );
};

export default Plot;
