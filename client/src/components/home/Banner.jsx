import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className=" 
        relative
        p-20 
        xl:px-40
        flex
        justify-center
        grid   
        gap-10
        md:grid-cols-2
        bg-fixed
        shadow-sm
        shadow-b
        shadow-indigo-500
        "
      style={{
        backgroundImage: `url(https://developer-blogs.nvidia.com/wp-content/uploads/2023/03/abstract-bar-graph.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      {/* banner card */}
      <div
        className=" 
        flex 
        flex-col 
        justify-center 
        items-center 
        space-y-4 
        relative
        "
      >
        <div className="space-y-2 text-center">
          <div className="flex justify-center">
            <img
              className="w-44"
              src="https://cdn.pixabay.com/photo/2016/03/31/20/40/arrow-1295953_960_720.png"
              alt=""
            />
          </div>
          <div className="text-white space-y-5">
            <h1 className="text-8xl font-bold">PLOTr</h1>
            <p className="text-xl font-semibold">
              A simple web tool for creating plots and graphs. With easy data
              input and customizable axis labels, users can generate their
              preferred graph type in a snap.
            </p>
          </div>
        </div>
      </div>

      {/* banner pie graphic and button */}
      <div
        className=" 
        relative
          py-32
          flex
          justify-evenly
          items-center
          bg-center
          bg-contain
          bg-no-repeat
          bg-[url('https://cdn.pixabay.com/photo/2013/07/12/15/21/pie-chart-149727_960_720.png')]"
      >
        <div className="">
          <Link
            to={"/create"}
            className="
              bg-indigo-500 
              px-2 
              p-1 
              rounded-lg 
              hover:bg-indigo-300
              hover:text-indigo-500
              shadow-lg
              hover:shadow-indigo-500
              text-white
              text-2xl
              font-semibold"
          >
            CREATE A PLOT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
