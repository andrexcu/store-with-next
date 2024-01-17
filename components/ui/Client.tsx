"use client";

import { useEffect, useState } from "react";

const Client = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-full bg-[#111014]">
      <div
        className="bg-[#111014] relative justify-center flex flex-col gap-4 items-center max-w-7xl mx-auto min-h-[1080px]"
        // style={{ opacity: scrollOpacity }}
      >
        {children}
      </div>
    </div>
  );
};

export default Client;
