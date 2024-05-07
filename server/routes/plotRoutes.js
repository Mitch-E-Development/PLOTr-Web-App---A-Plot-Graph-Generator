const express = require("express");
const { spawn } = require("child_process");

const router = express.Router();

// Route for creating a plot of any type
router.get("/create/:type", async (req, res) => {
  try {
    const plotType = req.params.type;
    const { title, xLabel, yLabel, xValues, yValues } = req.body;

    // Validate request body
    if (!title || !xLabel || !yLabel || !xValues || !yValues) {
      return res.status(400).json({ message: "Missing required parameters." });
    }

    const plotGenerator = spawn('python3', ['generators/line.py', title, xLabel, yLabel, xValues, yValues, plotType]);

    let plotBase64 = '';

    plotGenerator.stdout.on('data', (data) => {
      // Append data to the plotBase64 string
      plotBase64 += data.toString();
    });

    plotGenerator.on('close', (code) => {
      if (plotBase64 !== '') {
        console.log(`CODE: ${code}`)
        // Send plot image data to the client
        res.status(200).send(plotBase64);
        console.log(`RECEIVED PLOT: ${plotBase64}`)
      } else {
        console.log('Plot data is empty');
        res.status(500).json({ message: "Error generating plot." });
      }
    });

    plotGenerator.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    plotGenerator.on('error', (error) => {
      console.error(`Error executing Python script: ${error}`);
      res.status(500).json({ message: "Error executing Python script." });
    });

  } catch (error) {
    console.error("Error generating plot:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
