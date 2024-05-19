import React, { useState } from "react";
import Toolbar from "../components/create/Toolbar";
import Form from "../components/create/Form";
import Plot from "../components/create/Plot";
import { generatePlot } from "../services/generator";
import HelpModal from "../components/create/HelpModal";

const Create = () => {
  const [plotData, setPlotData] = useState({
    title: "",
    xLabel: "",
    yLabel: "",
    xValues: ["", "", ""],
    yValues: ["", "", ""],
    plotType: "line",
  });
  const [plotIMG, setPlotIMG] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInput = (field, index, value) => {
    // Check if the field is a string
    if (typeof plotData[field] === "string") {
      // Update directly if it's a string field
      setPlotData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    } else if (Array.isArray(plotData[field])) {
      // Update array fields using map
      setPlotData((prevState) => ({
        ...prevState,
        [field]: prevState[field].map((item, i) =>
          i === index ? value : item
        ),
      }));
    }
  };

  const handleAddValue = () => {
    setPlotData((prevState) => ({
      ...prevState,
      xValues: [...prevState.xValues, ""],
      yValues: [...prevState.yValues, ""],
    }));
  };

  const handleRemoveValue = () => {
    setPlotData((prevState) => {
      const newXValues = [...prevState.xValues];
      newXValues.pop(); // Remove the last element from xValues
      const newYValues = [...prevState.yValues];
      newYValues.pop(); // Remove the last element from yValues
      return {
        ...prevState,
        xValues: newXValues,
        yValues: newYValues,
      };
    });
  };

  const handleClearForm = () => {
    setPlotData((prevState) => {
      // create original state data
      const newTitle = "";
      const newXLabel = "";
      const newYLabel = "";
      const newXValues = [""];
      const newYValues = [""];
      const newPlotType = "line";

      // return cleared state
      return {
        ...prevState,
        title: newTitle,
        xLabel: newXLabel,
        yLabel: newYLabel,
        xValues: newXValues,
        yValues: newYValues,
        plotType: newPlotType,
      };
    });
  };

  const handleGeneratePlot = async () => {
    try {
      const imgString = await generatePlot(plotData);
      setPlotIMG(imgString);
    } catch (error) {
      console.error("Error generating plot:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="">
      {/* toolbar */}
      <Toolbar
        plotData={plotData}
        handleInput={handleInput}
        handleModalOpen={handleModalOpen}
      />

      <div className="lg:flex">
        {/* form */}
        <Form
          plotData={plotData}
          handleInput={handleInput}
          handleAddValue={handleAddValue}
          handleRemoveValue={handleRemoveValue}
          handleClearForm={handleClearForm}
          handleGeneratePlot={handleGeneratePlot}
        />
        {/* plot */}
        <Plot plotIMG={plotIMG} />
      </div>

      {/* help modal */}
      {showModal && (
        <HelpModal plotData={plotData} handleModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default Create;
