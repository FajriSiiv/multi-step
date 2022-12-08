import React from "react";

import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Confirm() {
  return (
    <div className="flex h-full flex-col gap-y-3 items-center justify-center">
      <div className="p-7 rounded-full bg-strawberry">
        <BsFillCheckCircleFill className="w-10 h-10 fill-white" />
      </div>
      <h2 className="text-4xl font-bold mt-4">Thank You</h2>
      <p className="text-zinc-300 text-lg text-center">
        Thanks for confirming your subscription! We hope have fun using our
        platform. If you ever need support, please feel free to email us at
        support@gmail.com
      </p>
    </div>
  );
}
