import React from "react";

interface PageProps {
  step: string;
  step_page: string;
  step_number: string;
  pathUrl: any;
}

export default function SidebarStep({
  step,
  step_number,
  step_page,
  pathUrl,
}: PageProps) {
  const path = window.location.pathname;

  return (
    <div className="flex items-center text-[16px] gap-3 text-white">
      <span
        className={`transition-all px-3 py-1 text-xl border-2 border-white rounded-full ${
          pathUrl === path ? "text-marine font-semibold bg-white" : null
        }`}
      >
        {step_number}
      </span>
      <div className="uppercase flex flex-col items-start">
        <span className="text-slate-400 text-[14px]">{step}</span>
        <p className="font-semibold">{step_page}</p>
      </div>
    </div>
  );
}
