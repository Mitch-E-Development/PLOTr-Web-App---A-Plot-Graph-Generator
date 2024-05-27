// validation service:
import * as Yup from "yup";

export const PlotDataSchema = Yup.object().shape({
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
        .matches(/^[a-zA-Z0-9\s]+$/, "Labels can contain letters & numbers only!")
        .required("X axis label is required!"),
    otherwise: (schema) => schema,
  }),

  yLabel: Yup.string().when("plotType", {
    is: (value) => value !== "pie", // Apply validation only if plotType is not 'pie'
    then: (schema) =>
      schema
        .matches(/^[a-zA-Z0-9\s]+$/, "Labels can contain letters & numbers only!")
        .required("Y axis label is required!"),
    otherwise: (schema) => schema,
  }),

  xValues: Yup.array()
    .of(
      Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, "X axis value/s can contain letters & numbers only!")
        .required("Missing X axis value/s!")
    )
    .min(1, "At least 1 X axis value is required!"),

  yValues: Yup.array()
    .of(
      Yup.number()
        .typeError("Y axis values can contain numbers only!")
        .required("Missing Y axis value/s!")
        
    )
    .min(1, "At least 1 Y axis value is required!"),
});

export const validateInput = async (plotData) => {
  try {
    await PlotDataSchema.validate(plotData, { abortEarly: false });
    return { isValid: true, errors: {} };
  } catch (validationErrors) {
    const errors = {};
    if (validationErrors.inner) {
      validationErrors.inner.forEach((error) => {
        // Check if error path is xValues or yValues
        if (error.path === "xValues" || error.path === "yValues") {
          // Get the index of the invalid value
          const index = parseInt(error.path.split("[")[1].split("]")[0]);
          // Create an error message with the corresponding value
          errors[error.path] = {
            message: error.message,
            value: plotData[error.path][index],
          };
          
        } else {
          errors[error.path] = error.message;
        }
      });
    }
    console.log(errors)
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
