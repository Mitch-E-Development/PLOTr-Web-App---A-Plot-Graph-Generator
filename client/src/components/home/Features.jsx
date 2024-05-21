import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    imageUrl: "https://ires-net.com/wp-content/uploads/2017/04/stats-chart.jpg",
    name: "Multiple Plot Types",
    description:
      "With PLOTr, users can choose from a diverse range of plot types including bar graphs, line charts, and pie plots. PLOTr has the right plot type for your needs.",
  },
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/035/162/140/non_2x/ai-generated-3d-illustration-of-pie-chart-over-black-background-with-colourful-neon-lights-3d-rendering-of-a-pie-chart-on-a-black-background-with-business-charts-and-graphs-ai-generated-free-photo.jpg",
    name: "User-Friendly Data Entry",
    description:
      "Streamline your data input process with PLOTr's user-friendly form. Enjoy the flexibility of adjustable field lengths, accommodating datasets of varying sizes.",
  },
  {
    imageUrl:
      "https://wallpapers.com/images/hd/forex-2000-x-1333-background-3uui4757u4apgayb.jpg",
    name: "Downloadable Plot Images",
    description:
      "Capture your plots with ease by downloading them as high-quality images. This allows you to save them for later use in documentation, presentations etc.",
  },
];

const Features = () => {
  return (
    <div className="p-10 py-24 pb-56 space-y-10 bg-gray-900">
      <div className="text-center space-y-4 text-white">
        <h2 className="text-5xl">Useful Features</h2>
        <p className="text-xl py-4">PLOTr is simple, but boasts some handy features. See them below.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            imageUrl={feature.imageUrl}
            name={feature.name}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
