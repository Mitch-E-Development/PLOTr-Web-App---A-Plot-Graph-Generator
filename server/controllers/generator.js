const { spawn } = require("child_process");

const createPlot = async (req, res) => {
  try {
    const { plotType } = req.body;
    let args = [];
    let plotBase64 = "";

    // Validate plot type
    const validPlotTypes = ["line", "bar", "scatter", "stair", "pie"];
    if (!validPlotTypes.includes(plotType)) {
      return res.status(400).json({ message: "Invalid/Unavailable plot type." });
    }

    // Extract input data based on plot type
    let inputData;
    if (plotType === "pie") {
      inputData = ["title", "xValues", "yValues"];
    } else {
      inputData = ["title", "xLabel", "yLabel", "xValues", "yValues"];
    }
    const plotData = inputData.reduce((acc, key) => {
      if (!req.body[key]) {
        throw new Error(`Missing required plot data: ${key}`);
      }
      acc[key] = req.body[key];
      return acc;
    }, {});

    console.log(`Received ${plotType} data:`, plotData);

    // Start python generator script
    args = [plotType, ...Object.values(plotData)];
    const plotGenerator = spawn("python3", ["generators/main.py", ...args]);

    // Receive output from generator script
    plotGenerator.stdout.on("data", (data) => {
      plotBase64 += data.toString();
    });

    // Close python process and send plot image to client
    plotGenerator.on("close", (code) => {
      if (plotBase64) {
        console.log(`CODE: ${code}`);
        console.log(`Sending plot img to client `);
        res.status(200).send(plotBase64);
      } else {
        console.log(`CODE: ${code}`);
        res.status(500).json({ message: "Error retrieving plot img string." });
      }
    });

    // Log errors
    plotGenerator.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    plotGenerator.on("error", (error) => {
      console.error(`Error executing Python script: ${error}`);
      res.status(500).json({ message: "Error executing Python script." });
    });

  } catch (error) {
    console.error(`Internal server error: ${error}`);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = {
  createPlot,
};
