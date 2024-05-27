import React from "react";
import { Link } from "react-router-dom";

const EntryCard = () => {
  return (
    <div
      className="
        px-10 
        py-20
        flex 
        flex-col 
        justify-center 
        items-center 
        rounded-lg 
        shadow-lg
        shadow-black 
        hover:shadow-indigo-500 
        bg-opacity-80
        space-y-4 
        bg-gray-200"
    >
      <div className="space-y-2 text-center">
        <div className="flex justify-center">
          <img
            className="w-44"
            src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png"
            alt=""
          />
        </div>

        <div className="">
          <h1 className="text-8xl font-bold">PLOTr</h1>
          <p className="text-lg py-2">Graph and Plot Generator</p>
        </div>
      </div>

      <div>
        <Link
          to={"/home"}
          className="
                bg-indigo-500 
                px-3 
                p-1 
                m-10
                rounded-lg 
                hover:bg-indigo-300
                hover:text-indigo-500
                shadow-lg
                hover:shadow-indigo-500
                text-white
                text-2xl
                font-semibold"
        >
          ENTER
        </Link>
      </div>
    </div>
  );
};

export default EntryCard;
