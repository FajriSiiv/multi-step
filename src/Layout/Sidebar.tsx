import React, { useEffect } from "react";
import SidebarStep from "../components/SidebarStep";
// import BgSidebar from "/public/assets/images/bg-sidebar-1.svg";

export default function Sidebar() {
  return (
    <div className="w-full h-full bg-transparent rounded-lg relative overflow-auto bg-sidebar">
      <div className="z-50 py-10 px-8 flex flex-col gap-y-8">
        <SidebarStep
          pathUrl="/step-1"
          step="STEP 1"
          step_number="1"
          step_page="Your info"
        />
        <SidebarStep
          pathUrl="/step-2"
          step="STEP 2"
          step_number="2"
          step_page="Select Plan"
        />
        <SidebarStep
          pathUrl="/step-3"
          step="STEP 3"
          step_number="3"
          step_page="add-ons"
        />
        <SidebarStep
          pathUrl="/step-4"
          step="STEP 4"
          step_number="4"
          step_page="summary"
        />
      </div>
    </div>
  );
}
