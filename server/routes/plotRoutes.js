const express = require("express");
const router = express.Router();
const validateRequest = require("../middleware/validateReq");
const { createPlot } = require("../controllers/generator");

// route for generating a plot
router.post("/create", validateRequest, createPlot);

module.exports = router;
