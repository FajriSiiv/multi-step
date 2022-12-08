import React, { useEffect, useState } from "react";
import SidebarStep from "../components/SidebarStep";

export default function Sidebar() {
  const tujuanPath = [
    {
      pathUrl: "/step-1",
      step: "STEP 1",
      step_number: "1",
      step_page: "Your Info",
    },
    {
      pathUrl: "/step-2",
      step: "STEP 2",
      step_number: "2",
      step_page: "Select Plant",
    },
    {
      pathUrl: "/step-3",
      step: "STEP 3",
      step_number: "3",
      step_page: "Add-ons",
    },
    {
      pathUrl: "/step-4",
      step: "STEP 4",
      step_number: "4",
      step_page: "summary",
    },
  ];

  return (
    <div className="w-full h-full bg-transparent rounded-lg relative overflow-auto bg-sidebar">
      <div className="z-50 py-10 px-8 flex flex-col gap-y-8">
        {tujuanPath.map((urlText: any, i: number) => (
          <SidebarStep
            key={i}
            pathUrl={urlText.pathUrl}
            step={urlText.step}
            step_number={urlText.step_number}
            step_page={urlText.step_page}
          />
        ))}
      </div>
    </div>
  );
}
