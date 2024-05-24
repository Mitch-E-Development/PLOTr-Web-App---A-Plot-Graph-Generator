// validation service:
import * as Yup from "yup";

const PlotDataSchema = Yup.object().shape({
  plotType: Yup.string().required("Select a plot type!"),

  title: Yup.string()
    .matches(/^[a-zA-Z0-9\s]+$/, "Title contains invalid characters")
    .min(1, "Title must be at least 1 character long")
    .max(50, "Title must be at most 50 characters long")
    .required("Title is required!"),

  xLabel: Yup.string().when("plotType", {
    is: (value) => value !== "pie", // Apply validation only if plotType is not 'pie'
    then: (schema) =>
      schema
        .matches(/^[a-zA-Z0-9\s]+$/, "X axis label contains invalid characters")
        .required("X axis label is required!"),
    otherwise: (schema) => schema,
  }),

  yLabel: Yup.string().when("plotType", {
    is: (value) => value !== "pie", // Apply validation only if plotType is not 'pie'
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

export const validateInput = async (plotData) => {
  try {
    await PlotDataSchema.validate(plotData, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (validationErrors) {
    console.error("Validation error:", validationErrors);
    const errors = {};
    if (validationErrors.inner) {
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
        console.log(errors[error.path]);
      });
    }

    return { isValid: false, errors };
  }
};

export const sanitizeInput = async (plotData) => {
  // set black list
  // loop through each input, checking for blacklisted characters
  // if bad char found, remove
  // return sanitized plot data for further validation
  return console.log("SANITIZER");
};
