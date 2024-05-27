import React from "react";

const CreationForm = ({ plotData, handleInput, errors }) => {
  const { plotType, title, xLabel, yLabel, xValues, yValues } = plotData;

  return (
    <div className="lg:w-1/4 py-8 px-2 bg-gray-900">
      <div className="grid gap-6 grid-cols-1 text-white">

        {/* Input for plot type */}
        <div className="px-4">
          <label className="font-semibold">Type</label>
          <select
            className="rounded-md w-full bg-white text-black p-1 px-2"
            type="text"
            value={plotType}
            onChange={(e) => handleInput("plotType", 0, e.target.value)}
          >
            <option value="line">Line Plot</option>
            <option value="bar">Bar Plot</option>
            <option value="scatter">Scatter Plot</option>
            <option value="stair">Stair Plot</option>
            <option value="pie">Pie Plot</option>
          </select>
        </div>
        
        {/* Input for plot title */}
        <div className="px-4">
          <label className="font-semibold">Title</label>
          <input
            className="rounded-md w-full text-black"
            type="text"
            value={title}
            onChange={(e) => handleInput("title", 0, e.target.value)}
          />
          {errors.title && (
            <p
              className="
                rounded-md 
                text-sm 
                bg-red-500 
                p-2 py-1 
                w-fit 
                mt-2 
                text-white 
                shadow-md 
                shadow-black"
            >
              {errors.title}
            </p>
          )}
        </div>

        {/* Conditional Inputs for X and Y Axis Labels */}
        {plotType !== "pie" && (
          <>
            <div className="px-4">
              <label className="font-semibold">X Axis Label</label>
              <input
                className="rounded-md w-full text-black"
                type="text"
                value={xLabel}
                onChange={(e) => handleInput("xLabel", 0, e.target.value)}
              />
              {errors.xLabel && (
                <p
                  className="
                    rounded-md 
                    text-sm 
                    bg-red-500 
                    p-2 py-1 
                    w-fit 
                    mt-2
                    text-white 
                    shadow-md 
                    shadow-black"
                >
                  {errors.xLabel}
                </p>
              )}
            </div>
            <div className="px-4">
              <label className="font-semibold">Y Axis Label</label>
              <input
                className="rounded-md w-full text-black"
                type="text"
                value={yLabel}
                onChange={(e) => handleInput("yLabel", 0, e.target.value)}
              />
              {errors.yLabel && (
                <p
                  className="
                    rounded-md 
                    text-sm 
                    bg-red-500 
                    p-2 py-1 
                    w-fit 
                    mt-2 
                    text-white 
                    shadow-md 
                    shadow-black"
                >
                  {errors.yLabel}
                </p>
              )}
            </div>
          </>
        )}

        {/* X Axis Values */}
        <div>
          <div className="overflow-y-auto max-h-32 px-4">
            <label className="font-semibold">
              {plotType === "pie" ? "Categories" : "X Axis Values"}
            </label>
            <div className="grid gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3">
              {xValues.map((value, index) => (
                <input
                  key={index}
                  className="rounded-md text-black"
                  type="text"
                  value={value}
                  onChange={(e) =>
                    handleInput("xValues", index, e.target.value)
                  }
                />
              ))}
            </div>
          </div>
          {Object.keys(errors)
            .filter((key) => key.startsWith("xValues["))
            .map((key) => (
              errors[key] && (
              <ul
                className="
                rounded-md 
                text-sm 
                bg-red-500 
                p-2 py-1 
                w-fit 
                mt-2
                mx-4 
                text-white 
                shadow-md 
                shadow-black"
              >
                <li>{errors[key]}</li>
              </ul>
              )
            ))}
        </div>

        {/* Y Axis Values */}
        <div>
          <div className="overflow-y-auto max-h-32 px-4">
            <label className="font-semibold">
              {plotType === "pie" ? "Values" : "Y Axis Values"}
            </label>
            <div className="grid gap-2 grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3">
              {yValues.map((value, index) => (
                <input
                  key={index}
                  className="rounded-md text-black"
                  type="number"
                  value={value}
                  onChange={(e) =>
                    handleInput("yValues", index, e.target.value)
                  }
                />
              ))}
            </div>
          </div>

          {Object.keys(errors)
            .filter((key) => key.startsWith("yValues["))
            .map((key) => (
              <ul
                className="
                rounded-md 
                text-sm 
                bg-red-500 
                p-2 py-1 
                w-fit 
                mt-2
                mx-4 
                text-white 
                shadow-md 
                shadow-black"
              >
                <li>{errors[key]}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreationForm;
