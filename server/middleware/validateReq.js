const Yup = require("yup");

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
        .matches(
          /^[a-zA-Z0-9\s]+$/,
          "X axis label contains invalid characters"
        )
        .required("X axis label is required!"),
    otherwise: (schema) => schema,
  }),
  yLabel: Yup.string().when("plotType", {
    is: (value) => value !== "pie",
    then: (schema) =>
      schema
        .matches(
          /^[a-zA-Z0-9\s]+$/,
          "Y axis label contains invalid characters"
        )
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
      Yup.number().typeError("Y values must be numbers!").required("Y value is required!")
    )
    .min(1, "At least one y value is required!"),
});

const validateRequest = async (req, res, next) => {
  try {
    await PlotDataSchema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log('ERROR VALIDATING');
    res.status(400).json({ error: error.message });
  }
};

module.exports = validateRequest;
