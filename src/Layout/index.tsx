import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: any }) {
  const [sideb, setSideb] = useState<any>();

  useEffect(() => {
    setSideb(<Sidebar />);
  }, [<Sidebar />]);

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[70%] h-[80vh] grid grid-cols-7 bg-white rounded-lg overflow-hidden p-2">
        <div className="col-span-2 ">{sideb}</div>
        <div className="col-span-5">
          <div className="px-20 py-10 h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
