import React from "react";

const helpInfo = [
  {
    title: "Line Plots",
    image:
      "https://thirdspacelearning.com/wp-content/uploads/2022/01/Line-Graph-Featured.png",
    intro:
      "Line plots are used to visualize data points connected by straight lines. They're great for showing trends over time or across categories.",
    main: "In a line plot, the x-axis typically represents the independent variable (like time or categories), while the y-axis represents the dependent variable. Each data point is marked and connected by lines to display the trend.",
    conclusion:
      "Line plots help in identifying patterns and trends in data. They're commonly used in fields like finance, economics, and science.",
    steps: [
      "Enter your data: Make sure you have the dataset ready with at least two columns, one for the x-axis values and one for the y-axis values.",
      "Select Line Plot: Choose the Line Plot option from the plot type menu.",
      "View the Plot: PLOTr will generate the line plot based on your data.",
      "Download: Once satisfied, download the generated image of your plot.",
    ],
  },
  {
    title: "Scatter Plots",
    image:
      "https://thirdspacelearning.com/wp-content/uploads/2022/04/Scatter-Graph-what-is-card-3-1.png",
    intro:
      "Scatter plots are used to visualize the relationship between two numerical variables.",
    main: "In a scatter plot, each data point is represented by a marker, and the position of the marker on the graph corresponds to the values of the two variables. Scatter plots are effective for identifying patterns, trends, and relationships between variables.",
    conclusion:
      "Scatter plots are commonly used in various fields, including statistics, data analysis, and scientific research.",
    steps: [
      "Enter your data: Make sure you have the dataset ready with at least two columns, one for the x-axis values and one for the y-axis values.",
      "Select Scatter Plot: Choose the Scatter Plot option from the plot type menu.",
      "View the Plot: PLOTr will generate the scatter plot based on your data.",
      "Download: Once satisfied, download the generated image of your plot.",
    ],
  },
  {
    title: "Stair Plots",
    image:
      "https://octave.sourceforge.io/octave/function/images/stairs_101.png",
    intro:
      "Stair plots, also known as step plots, are similar to line plots but have a distinct visual style.",
    main: "In a stair plot, data points are connected by horizontal and vertical lines, creating a step-like appearance. These plots are useful for visualizing data that changes abruptly or in discrete steps.",
    conclusion:
      "Stair plots are particularly effective for showing cumulative data or sequences of events.",
    steps: [
      "Enter your data: Make sure you have the dataset ready with at least two columns, one for the x-axis values and one for the y-axis values.",
      "Select Stair Plot: Choose the Stair Plot option from the plot type menu.",
      "View the Plot: PLOTr will generate the stair plot based on your data.",
      "Download: Once satisfied, download the generated image of your plot.",
    ],
  },
  {
    title: "Bar Plots",
    image:
      "https://thirdspacelearning.com/wp-content/uploads/2022/04/Bar-Charts-What-is-card.png",
    intro:
      "Bar plots are used to compare different categories of data by representing them as bars.",
    main: "In a bar plot, each bar's length corresponds to the value of the data it represents. Bar plots are effective for comparing categorical data.",
    conclusion:
      "Bar plots are commonly used in market research, social sciences, and business analytics.",
    steps: [
      "Enter your data: Make sure you have the dataset ready with categorical variables and their corresponding numerical values.",
      "Select Bar Plot: Choose the Bar Plot option from the plot type menu.",
      "View the Plot: PLOTr will generate the bar plot based on your data.",
      "Download: Once satisfied, download the generated image of your plot.",
    ],
  },
  {
    title: "Pie Charts",
    image:
      "https://thirdspacelearning.com/wp-content/uploads/2023/07/Pie-Chart-us-what-is-image-2.png",
    intro:
      "Pie charts are circular statistical graphics that are divided into slices to illustrate numerical proportions.",
    main: "In a pie chart, each slice represents a category, and the size of the slice corresponds to the proportion of data it represents. The entire pie represents 100% of the data.",
    conclusion:
      "Pie charts are useful for displaying the relative sizes of various categories within a dataset. However, they should be used with caution, especially when there are many categories or when comparing proportions.",
    steps: [
      "Enter your data: Make sure you have the dataset ready with categorical variables and their corresponding numerical values.",
      "Select Pie Chart: Choose the Pie Chart option from the plot type menu.",
      "View the Plot: PLOTr will generate the pie chart based on your data.",
      "Download: Once satisfied, download the generated image of your plot.",
    ],
  },
];

const HelpModal = ({ plotData, toggleModal }) => {
  const { plotType } = plotData;

  const plotInfo = helpInfo.find((info) =>
    info.title.toLowerCase().includes(plotType.toLowerCase())
  );

  return (
    <>
      <div
        className="
          fixed 
          inset-0 
          z-50 
          flex 
          justify-center 
          items-center 
          overflow-x-hidden 
          overflow-y-auto 
          outline-none 
          backdrop-blur 
          bg-gray-800/30"
      >
        <div className="relative w-[80%] lg:w-[65%] xl:w-[50%] my-6 mx-auto h-[80%]">
          <div
            className="
              border-0 
              rounded-lg d 
              shadow-black
              hover:shadow-indigo-500
              shadow-lg
              relative 
              flex 
              flex-col 
              w-full 
              bg-gray-200 
              outline-none 
              focus:outline-none"
          >
            <div className="p-4 flex justify-between">
              <h2 className="text-3xl text-center capitalize font-semibold">
                Help
              </h2>
              <div className="flex items-center justify-end ">
                <button
                  className="
                    bg-indigo-500 
                    p-1 
                    px-3 
                    rounded-lg 
                    shadow-md
                    shadow-black
                    hover:shadow-indigo-500
                    hover:bg-indigo-200 
                    hover:text-indigo-500 
                    text-white
                    text-xl
                    font-semibold"
                  onClick={() => toggleModal()}
                >
                  x
                </button>
              </div>
            </div>

            <div
              className="
                overflow-y-auto
                max-h-[60vh] 
                bg-gray-700 
                p-10 
                py-10 
                space-y-8 
                text-white 
                rounded-b-lg
                text-lg"
            >
              <h3 className="text-3xl text-center capitalize">
                {plotInfo.title}
              </h3>
              <p>{plotInfo.intro}</p>
              <p>{plotInfo.main}</p>
              <img src={plotInfo.image} alt="" />
              <p>{plotInfo.conclusion}</p>
              <hr />
              <h4 className="text-2xl text-center capitalize">Instructions</h4>
              <ol className="list-decimal list-inside px-4 space-y-2">
                {plotInfo.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpModal;
