import React from "react";

const Toolbar = ({
  plotData,
  toggleModal,
  handleAddValue,
  handleRemoveValue,
  handleClearForm,
  handleFormSubmit,
  handlePlotDownload,
}) => {
  return (
    <div
      className="
        p-4 

        bg-gray-900 
        text-white
        font-semibold
        sticky
        shadow-b
        shadow-sm
        shadow-indigo-500
        top-0"
    >
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
        <span className="flex justify-center gap-2">
          <button
            className="
              bg-green-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-green-300
              hover:text-green-500
              min-w-[110px]
              shadow-md
              hover:shadow-green-500
              text-white
              font-semibold"
            onClick={() => handleAddValue()}
          >
            + VALUES
          </button>
          <button
            className="
              bg-orange-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-orange-300
              hover:text-orange-500
              min-w-[110px]
              shadow-md
              hover:shadow-orange-500
              text-white
              font-semibold"
            onClick={() => handleRemoveValue()}
          >
            - VALUES
          </button>
          <button
            className="
              bg-red-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-red-300
              hover:text-red-500
              min-w-[110px]
              shadow-md
              hover:shadow-red-500
              text-white
              font-semibold"
            onClick={() => handleClearForm()}
          >
            CLEAR
          </button>
        </span>

        <span className="flex justify-center gap-2">
          <button
            className="
              bg-cyan-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-cyan-300
              hover:text-cyan-500
              min-w-[110px]
              shadow-md
              hover:shadow-cyan-500
              text-white
              font-semibold"
            onClick={() => handleFormSubmit(plotData)}
          >
            GENERATE
          </button>
          <button
            onClick={() => handlePlotDownload()}
            className="
              bg-indigo-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-indigo-300
              hover:text-indigo-500
              min-w-[110px]
              shadow-md
              hover:shadow-indigo-500
              text-white
              font-semibold"
          >
            DOWNLOAD
          </button>
          <button
            onClick={() => toggleModal()}
            className="
              bg-pink-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-pink-300
              hover:text-pink-500
              min-w-[110px]
              shadow-md
              hover:shadow-pink-500
              text-white
              font-semibold"
          >
            HELP
          </button>
        </span>
      </div>
    </div>
  );
};

export default Toolbar;
