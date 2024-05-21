import React from "react";
import SummaryCard from "./SummaryCard";

const steps = [
  {
    imageUrl:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "1. Select Plot Type",
    description:
      "Choose your desired plot type from the available options such as pie, bar and line plots.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/306198/pexels-photo-306198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "2. Enter Plot Data",
    description:
      "Input your x and y-axis, labels & data into Plotr's user-friendly interface. Don;t forget your plto title!.",
  },
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_960_720.png",
    name: "3. Generate Plot",
    description:
      "Click the Generate Button to instantly create your plot and show it in ypour browser.",
  },
  {
    imageUrl:
      "https://rockwellautomation.scene7.com/is/image/rockwellautomation/aem_shutterstock_1420922999.1280.jpg",
    name: "4. Download Image",
    description:
      "Want to save your new plot? Download your plot image with a simple click for further use.",
  },
];

const Summary = () => {
  return (
    <div className="p-10 py-24 space-y-10 bg-gray-900">
      <div className="text-center space-y-4 text-white">
        <h2 className="text-5xl">Easy to Use</h2>
        <p className="text-xl p-4">
          Generating a plot is as easy as these 4 steps! Click the tiles
          below.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <SummaryCard
            key={index}
            imageUrl={step.imageUrl}
            name={step.name}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Summary;
