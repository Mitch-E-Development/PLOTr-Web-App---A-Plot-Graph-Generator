import React from "react";
import SummaryCard from "./SummaryCard";

const steps = [
  {
    // imageUrl: "https://i.ibb.co/FXtFBSh/martin-katler-0-Sm-GWb-Zzw-unsplash.jpg",
    name: "1. Select Plot Type",
    description:
      "Choose your desired plot type from the available options such as pie, bar and line plots.",
  },
  {
    // imageUrl: "https://i.ibb.co/7C3nkfr/niklas-du-EI1op-VNk4yg-unsplash.jpg",
    name: "2. Enter Plot Data",
    description:
      "Input your x and y-axis, labels & data into Plotr's user-friendly interface. Don;t forget your plto title!.",
  },
  {
    // imageUrl: "https://i.ibb.co/b22kSx7/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg",
    name: "3. Generate Plot",
    description:
      "Click the Generate Button to instantly create your plot and show it in ypour browser.",
  },
  {
    // imageUrl: "https://i.ibb.co/b22kSx7/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg",
    name: "4. Download Image",
    description:
      "Want to save your new plot? Download your plot image with a simple click for further use.",
  },
];

const Summary = () => {
  return (
    <div className="p-10 py-20 border-y space-y-10 bg-gray-700 ">
      <div className="text-center space-y-4 text-white">
        <h2 className="text-3xl">Easy to Use</h2>
        <p>Generating a plot is as simple as these 4 steps!</p>
      </div>

      <div className="flex justify-center grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <SummaryCard
            key={index}
            // imageUrl={}
            name={step.name}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Summary;
