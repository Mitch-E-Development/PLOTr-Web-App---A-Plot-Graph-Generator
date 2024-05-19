import React from "react";
import { Link } from "react-router-dom";

const Content = () => {

  return (
    <div
      className="
        flex 
        h-[100vh]
        p-20 
        justify-center 
        items-center
        bg-[url('https://optiver.com/wp-content/uploads/2023/11/AdobeStock_626180909-scaled.jpeg')]"
    >
      <div
        className="
        px-10 
        py-20
        flex 
        flex-col 
        justify-center 
        items-center 
        rounded-lg 
        shadow-xl 
        shadow-indigo-500 
        bg-opacity-90
        space-y-4 
        bg-gray-700"
      >
        <div className="space-y-2 text-center">
          <div className="flex justify-center">
            <img
              className="w-44"
              src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png"
              alt=""
            />
          </div>

          <div className="text-white">
            <h1 className="text-8xl font-bold">PLOTr</h1>
            <p>Graph and Plot Generator</p>
          </div>
        </div>

        <div>
          <Link to={"/home"}>
            <button
              className="
                bg-indigo-400 
                px-2 
                p-1 
                m-10
                rounded-lg 
                hover:bg-indigo-200
                min-w-[150px]
                shadow-lg
                text-white
                font-semibold"
            >
              ENTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
