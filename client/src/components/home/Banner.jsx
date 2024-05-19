import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="
        p-10  
        py-20 
        flex
        justify-center
        grid   
        gap-20
        md:grid-cols-2
        bg-[url('https://developer-blogs.nvidia.com/wp-content/uploads/2023/03/abstract-bar-graph.jpg')]"
    >
      {/* banner card */}
      <div
        className="
        p-10
        flex 
        flex-col 
        justify-center 
        items-center 
        space-y-4 
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
            <p className="text-xl">
              <b>Introducing PLOTr:</b> the ultimate web tool for creating
              custom plots and graphs. With easy data input and customizable
              axis labels, users can generate their preferred graph type in a
              snap. Whether you're a data pro or just getting started, Plotr
              simplifies visualization like never before.
            </p>
          </div>
        </div>
      </div>

      {/* banner pie graphic and button */}
      <div
        className="
          p-20
          
          flex
          justify-center
          items-center
          bg-center
          bg-contain
          bg-no-repeat
          bg-[url('https://cdn.pixabay.com/photo/2013/07/12/15/21/pie-chart-149727_960_720.png')]"
      >
        <div>
          <Link to={"/create"}>
            <button
              className="
                bg-indigo-400 
                px-3 
                p-2 
                m-10
                rounded-lg 
                hover:bg-indigo-200
                min-w-[150px]
                shadow-lg
                hover:shadow-indigo-500
                text-white
                text-2xl
                font-semibold"
            >
              GENERATE PLOT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
