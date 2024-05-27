import axios from 'axios';
import { saveAs } from "file-saver";
import { validateInput } from './validator';


// service for generating a plot
export const generatePlot = async (plotData) => {
    try {
        const response = await axios.post('http://localhost:5050/api/create', plotData)

        return response.data
    } catch (error) {
        console.log('ERROR POSTING TO API: ', error)
    }
}

export const submitForm = async (plotData) => {
    try {
      const validationResult = await validateInput(plotData);
      if (validationResult.isValid) {
        const imgString = await generatePlot(plotData);
        return { imgString, errors: {} };
      } else {
        return { imgString: null, errors: validationResult.errors };
      }
    } catch (error) {
      console.error("Error generating plot:", error);
      return { imgString: null, errors: { general: "Error generating plot" } };
    }
}

export const clearForm = () => {
    return {
      title: "",
      xLabel: "",
      yLabel: "",
      xValues: ["", "", ""],
      yValues: ["", "", ""],
      plotType: "line",
    }
  }

export const takeInput = (plotData, field, index, value) => {
    if (typeof plotData[field] === "string") {
      return {
        ...plotData,
        [field]: value,
      };
    } else if (Array.isArray(plotData[field])) {
      return {
        ...plotData,
        [field]: plotData[field].map((item, i) =>
          i === index ? value : item
        ),
      };
    };
    return plotData;
  }

export const addValue = (plotData) => {
    return {
      ...plotData,
      xValues: [...plotData.xValues, ""],
      yValues: [...plotData.yValues, ""],
    };
  }

export const removeValue = (plotData) => {
    const newXValues = [...plotData.xValues];
    newXValues.pop();
    const newYValues = [...plotData.yValues];
    newYValues.pop();
    return {
      ...plotData,
      xValues: newXValues,
      yValues: newYValues,
    };
  }

export const downloadPlot = (plotIMG, plotTitle) => {
    const byteChars = atob(plotIMG);
    const byteNums = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNums[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNums);

    const blob = new Blob([byteArray], { type: "image/png" });
    saveAs(blob, `${plotTitle}.png`);
}