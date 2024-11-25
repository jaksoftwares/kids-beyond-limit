"use client";

import dynamic from "next/dynamic";
import React from "react";

const MasonryGrid = dynamic(() => import("../components/MasonryGrid"), { ssr: false });

const Page: React.FC = () => {
  return (
    <div className="bg-white mt-24">
      <div className="h-24 lg:h-32 bg-gradient-to-b from-blue-darker to-blue-light px-10 md:px-40 flex items-center">
        <span className="text-white font-semibold text-2xl lg:text-5xl">Gallery</span>
      </div>
      <MasonryGrid />
    </div>
  );
}

export default Page;
