import React, { useState } from "react";

import { 
  takeInput,
  addValue, 
  removeValue,
  clearForm, 
  submitForm,
  downloadPlot, 
  } from "../services/generator";

import Toolbar from "../components/create/Toolbar";
import CreationForm from "../components/create/CreationForm";
import Plot from "../components/create/Plot";
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
  const [errors, setErrors] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInput = (field, index, value) => {
    setPlotData((prevState) =>
      takeInput(prevState, field, index, value)
    );
  };

  const handleAddValue = () => {
    setPlotData((prevState) => addValue(prevState));
  };

  const handleRemoveValue = () => {
    setPlotData((prevState) => removeValue(prevState));
  };

  const handleClearForm = () => {
    setPlotData(clearForm());
  };

  const handleFormSubmit= async () => {
    const { imgString, errors } = await submitForm(plotData);
    setErrors(errors);
    if (imgString) {
      setPlotIMG(imgString);
    }
  };

  const handlePlotDownload = () => {
    downloadPlot(plotIMG, plotData.title);
  };

  return (
    <div>
      {/* toolbar */}
      <Toolbar
        plotData={plotData}
        handleInput={handleInput}
        handleAddValue={handleAddValue}
        handleRemoveValue={handleRemoveValue}
        handleClearForm={handleClearForm}
        handleFormSubmit={handleFormSubmit}
        handlePlotDownload={handlePlotDownload}
        toggleModal={toggleModal}
      />

      <div className="lg:flex">
        {/* form */}
        <CreationForm
          plotData={plotData}
          handleInput={handleInput}
          errors={errors}
        />
        {/* plot */}
        <Plot plotIMG={plotIMG} />
      </div>

      {/* help modal */}
      {showModal && 
        <HelpModal plotData={plotData} toggleModal={toggleModal} />
      }
    </div>
  );
};

export default Create;
