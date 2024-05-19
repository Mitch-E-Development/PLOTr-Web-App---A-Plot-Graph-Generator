import React from "react";

const HelpModal = ({ plotData, handleModalClose }) => {
  const { plotType } = plotData;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center overflow-x-hidden overflow-y-auto outline-none backdrop-blur bg-gray-800/30">
        <div className="relative w-[80%] lg:w-[65%] xl:w-[50%] my-6 mx-auto h-[80%]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-200 outline-none focus:outline-none">
            <div className="p-4 flex justify-between">
              <h2 className="text-3xl text-center capitalize">
                Help
              </h2>
              <div className="flex items-center justify-end ">
                <button
                  className="bg-indigo-400 p-1 px-3 rounded-lg hover:bg-indigo-200 text-white"
                  onClick={() => handleModalClose()}
                >
                  X
                </button>
              </div>
            </div>

            {/* Make this div scrollable */}
            <div className="overflow-y-auto max-h-[60vh] bg-gray-500 p-6 py-10 space-y-8 text-white rounded-b-lg">
              <h3 className="text-2xl text-center capitalize">
                {plotType} plots
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <img
                src="https://slideplayer.com/slide/14652264/90/images/7/Parts+of+a+Line+Graph+Title+Scale+Points+Line+Labels.jpg"
                alt="Example Graph Img"
                className="w-full border border-gray-500 flex"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <ol className="list-decimal list-inside px-4 space-y-1">
                <li>
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </li>
                <li>
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </li>
                <li>
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. in reprehenderit in voluptate velit
                  esse cillum.
                </li>
              </ol>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpModal;
