import React from "react";

const Plot = ({ plotIMG }) => {
  return (
    <>
      {!plotIMG ? (
        <div
          className="
              lg:w-3/4 
              flex 
              justify-center 
              items-center 
              p-10
              h-[70vh]
              lg:h-[100vh]
              bg-gray-700"
        >
          <p className="text-white text-xl text-center">
            Once generated, An image of your plot will be displayed here...
          </p>
        </div>
      ) : (
        <div
          className="
        lg:w-3/4 
        flex 
        justify-center 
        items-center 
        p-4
        bg-gray-700"
        >
          <img
            className="text-white text-xl text-center "
            src={`data:image/png;base64,${plotIMG}`}
            alt="Your generated plot"
          />
        </div>
      )}
    </>
  );
};

export default Plot;
