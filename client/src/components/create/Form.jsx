import React from "react";

const Form = ({
  plotData,
  handleInput,
  handleAddValue,
  handleRemoveValue,
  handleClearForm,
  handleGeneratePlot
}) => {
  const { title, xLabel, yLabel, xValues, yValues } = plotData;

  return (
    <div className="lg:w-1/4 p-4 py-8 bg-gray-600">
      <div className="grid gap-6 grid-cols-1 text-white">
        <div className="">
          <label>Title</label>
          <input
            className="rounded-md w-full text-black"
            type="text"
            value={title}
            onChange={(e) => handleInput("title", 0, e.target.value)}
          />
        </div>

        <div className="">
          <label>X Label</label>
          <input
            className="rounded-md w-full text-black"
            type="text"
            value={xLabel}
            onChange={(e) => handleInput("xLabel", 0, e.target.value)}
          />
        </div>

        <div className="">
          <label>Y Label</label>
          <input
            className="rounded-md w-full text-black"
            type="text"
            value={yLabel}
            onChange={(e) => handleInput("yLabel", 0, e.target.value)}
          />
        </div>

        <div>
          <label>X Values</label>
          <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-2">
            {xValues.map((value, index) => (
              <input
                key={index}
                className="rounded-md text-black"
                type="text"
                value={value}
                onChange={(e) => handleInput("xValues", index, e.target.value)}
              />
            ))}
          </div>
        </div>

        <div>
          <label>Y Values: </label>
          <div className="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-2">
            {yValues.map((value, index) => (
              <input
                key={index}
                className="rounded-md text-black"
                type="number"
                value={value}
                onChange={(e) => handleInput("yValues", index, e.target.value)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-6">
          <button
            className="bg-green-400 px-2 p-1 rounded-lg hover:bg-green-200"
            onClick={() => handleAddValue()}
          >
            ADD VALUES
          </button>
          <button
            className="bg-orange-400 px-2 p-1 rounded-lg hover:bg-orange-200"
            onClick={() => handleRemoveValue()}
          >
            REMOVE VALUES
          </button>
          <button
            className="bg-red-400 px-2 p-1 rounded-lg hover:bg-red-200"
            onClick={() => handleClearForm()}
          >
            CLEAR FORM
          </button>
          <button
            className="bg-blue-400 px-2 p-1 rounded-lg hover:bg-blue-200"
            onClick={() => handleGeneratePlot(plotData)}
          >
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
