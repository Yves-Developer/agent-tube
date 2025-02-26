import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Pulse */}
      <div className="w-6 h-6 bg-primary/80 shadow-[0_0_8px_4px_rgba(0,0,200,0.5)] rounded-sm animate-pulse"></div>
      {/* Logo text */}
      <h1 className="text-3xl font-bold">
        Agent<span className="text-primary">Tube</span>
      </h1>
    </div>
  );
};

export default Logo;
