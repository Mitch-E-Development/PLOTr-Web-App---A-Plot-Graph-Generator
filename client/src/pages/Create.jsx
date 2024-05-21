import React, { useState } from "react";
import {saveAs} from 'file-saver';

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

  const toggleModal = () => {
    setShowModal(!showModal);
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
  
  const handlePlotDownload = () => {
    // Convert base64 string to binary data
    const byteChars = atob(plotIMG);
    const byteNums = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNums[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNums);

    // Create a Blob from the binary data
    const blob = new Blob([byteArray], { type: 'image/png'})
    // Save the Blob as a file
    saveAs(blob, `${plotData.title}.png`)
  }

  return (
    <div >
      {/* toolbar */}
      <Toolbar
        plotData={plotData}
        handleInput={handleInput}
        handleAddValue={handleAddValue}
        handleRemoveValue={handleRemoveValue}
        handleClearForm={handleClearForm}
        handleGeneratePlot={handleGeneratePlot}
        handlePlotDownload={handlePlotDownload}
        toggleModal={toggleModal}
      />

      <div className="lg:flex">
        {/* form */}
        <Form
          plotData={plotData}
          handleInput={handleInput}

        />
        {/* plot */}
        <Plot plotIMG={plotIMG} />
      </div>

      {/* help modal */}
      {showModal && (
        <HelpModal plotData={plotData} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Create;
