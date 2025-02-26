import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative pb-[630px]">
      {" "}
      {/* Add padding-bottom to push Features down */}
      <div className="w-full h-[300px] flex gap-3 flex-col items-center justify-center bg-primary relative">
        <h1 className="text-4xl font-bold text-white">Welcome to AgentTube</h1>
        <p className="text-white">The best place to find your dream home</p>
        <div className="flex gap-3">
          <Input
            placeholder="Enter Youtube URL..."
            className="text-white"
            id="input-placeholder-white"
          />
          <Button variant="outline">Generate</Button>
        </div>
      </div>
      {/* Box moved up into the first section */}
      <div className="container mx-auto bg-zinc-200 h-[600px] ring-4 ring-inset ring-transparent shadow rounded-md absolute top-[250px] left-1/2 -translate-x-1/2 p-1">
        <Image
          width={1920}
          height={1440}
          src="/preview.png"
          alt="Preview"
          className="w-full h-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
