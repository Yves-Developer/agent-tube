import { Mic, Image, FileText, Video } from "lucide-react"; // Import relevant icons
import React from "react";

const features = [
  {
    title: "AI Transcription",
    icon: <Mic size={20} className="text-primary" />,
    description: "Convert YouTube videos into accurate text transcriptions.",
  },
  {
    title: "Thumbnail Generator",
    icon: <Image size={20} className="text-primary" />,
    description: "Create eye-catching video thumbnails instantly with AI.",
  },

  {
    title: "Auto Chapters",
    icon: <Video size={20} className="text-primary" />,
    description:
      "Generate timestamped chapters automatically for better navigation.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <h1 className="text-4xl font-bold text-center mt-10">Features</h1>
      <div className="container mx-auto flex flex-wrap gap-3 justify-around items-center">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-[250px] bg-zinc-600/10 rounded-md flex flex-col items-center justify-center gap-1 p-4"
          >
            <div className="w-10 h-10 rounded-sm flex justify-center items-center bg-primary/10">
              {feature.icon}
            </div>
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-sm text-center text-zinc-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
