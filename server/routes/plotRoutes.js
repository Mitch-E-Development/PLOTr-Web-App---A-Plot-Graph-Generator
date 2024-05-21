const express = require("express");
const { spawn } = require("child_process");

const router = express.Router();

// Route for creating a plot of any type
router.post("/create", async (req, res) => {
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
