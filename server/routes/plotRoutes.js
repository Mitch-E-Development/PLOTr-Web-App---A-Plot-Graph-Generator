const express = require("express");
const Yup = require("yup");
const { spawn } = require("child_process");

const router = express.Router();

// Define Yup schema for validation
const PlotDataSchema = Yup.object().shape({
  plotType: Yup.string().required("Select a plot type!"),
  title: Yup.string()
    .matches(/^[a-zA-Z0-9\s]+$/, "Title contains invalid characters")
    .min(1, "Title must be at least 1 character long")
    .max(50, "Title must be at most 50 characters long")
    .required("Title is required!"),
  xLabel: Yup.string().when("plotType", {
    is: (value) => value !== "pie",
    then: (schema) =>
      schema
        .matches(/^[a-zA-Z0-9\s]+$/, "X axis label contains invalid characters")
        .required("X axis label is required!"),
    otherwise: (schema) => schema,
  }),
  yLabel: Yup.string().when("plotType", {
    is: (value) => value !== "pie",
    then: (schema) =>
      schema
        .matches(/^[a-zA-Z0-9\s]+$/, "Y axis label contains invalid characters")
        .required("Y axis label is required!"),
    otherwise: (schema) => schema,
  }),
  xValues: Yup.array()
    .of(
      Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, "X values must be alphanumeric strings!")
        .required("X value is required!")
    )
    .min(1, "At least one x value is required!"),
  yValues: Yup.array()
    .of(
      Yup.number()
        .typeError("Y values must be numbers!")
        .required("Y value is required!")
    )
    .min(1, "At least one y value is required!"),
});

// Middleware for validating request body
const validateRequest = async (req, res, next) => {
  try {
    await PlotDataSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log( 'ERROR VALIDTING')
    res.status(400).json({ error: error.message });
  }
};

// Route for creating a plot of any type
router.post("/create", validateRequest, async (req, res) => {
  try {
    const { plotType } = req.body;

    let args = [];
    let plotBase64 = "";

    // Extract plot data and set arguments based on plot type
    if (plotType === "line" || 
        plotType === "bar" ||
        plotType === 'scatter' ||
        plotType === 'stair') {
      const { title, xLabel, yLabel, xValues, yValues, plotType } = req.body;
      console.log("Received plot data:", {
        title,
        xLabel,
        yLabel,
        xValues,
        yValues,
      });
      args = [plotType, title, xLabel, yLabel, xValues, yValues];

    } else if (plotType === "pie") {
      const { title, xValues, yValues, plotType } = req.body;
      console.log("Received pie data:", { 
        title, 
        xValues, 
        yValues, 
      });
      args = [plotType, title, xValues, yValues];
      
    } else {
      return res
        .status(400)
        .json({ message: "Invalid/Unavailable plot type." });
    }

    // Spawn python process passing in the plot data
    const plotGenerator = spawn("python3", [`generators/main.py`, ...args]);

    // get plot generator output (plot is base64)
    plotGenerator.stdout.on("data", (data) => {
      plotBase64 += data.toString();
    });

    // close python process and send response
    plotGenerator.on("close", (code) => {
      if (plotBase64 !== "") {
        console.log(`CODE: ${code}`);
        console.log(`RECEIVED PLOT: ${plotBase64}`);
        res.status(200).send(plotBase64);
      } else {
        res.status(500).json({ message: "Error retreiving plot img string." });
      }
    });

    // handle errors with data output
    plotGenerator.stderr.on("data", (data) => {
      // res.status(500).json({ message: `stderr: ${data}`});
      console.log(`stderr: ${data}`);
    });
    // handle errors when executing script
    plotGenerator.on("error", (error) => {
      res.status(500).json({ message: "Error executing Python script." });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
