import React from "react";

const Toolbar = ({ plotData, handleInput, handleModalOpen }) => {
  const { plotType } = plotData;

  return (
    <div className="flex justify-between items-center p-4 py-8 border-b border-gray-200 px-4 bg-gray-600 text-white">
      <span className="flex justify-center gap-x-2">
        <label>Type</label>
        <select
          className="rounded-md w-full bg-white text-black p-1 px-2"
          type="text"
          value={plotType}
          onChange={(e) => handleInput("plotType", 0, e.target.value)}
        >
          <option value="line">Line Plot</option>
          <option value="pie">Pie Plot</option>
          <option value="bar">Bar Plot</option>
        </select>
      </span>
      <span className="flex justify-center gap-x-5">
        <button className="bg-indigo-400 px-2 p-1 rounded-lg hover:bg-indigo-200">
          DOWNLOAD
        </button>
        <button onClick={() => handleModalOpen()} className="bg-indigo-400 px-2 p-1 rounded-lg hover:bg-indigo-200">
          HELP
        </button>
      </span>
    </div>
  );
};

export default Toolbar;
