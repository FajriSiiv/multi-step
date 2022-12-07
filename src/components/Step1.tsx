import React from "react";
import { useLocation } from "react-router-dom";
import ButtonLinks from "./ButtonLinks";

export default function StepOne() {
  const path = useLocation();
  console.log(path);

  return (
    <div className="text-marine relative h-full">
      <h1 className="font-semibold text-3xl">Personal info</h1>
      <p className="text-slate-400 text-opacity-80 mt-3">
        Please provide your name, email, address, and phone number.
      </p>

      <form className="flex flex-col justify-between text-[16px] pt-10">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label className="">Name</label>
            <input
              type="text"
              className="px-3 py-2 font-semibold placeholder:font-normal border-2 border-slate-300 rounded-md"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="">Email Address</label>
            <input
              type="text"
              className="px-3 py-2 font-semibold placeholder:font-normal border-2 border-slate-300 rounded-md"
              placeholder="Email Address"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="">Phone Number</label>
            <input
              type="text"
              className="px-3 py-2 font-semibold placeholder:font-normal border-2 border-slate-300 rounded-md"
              placeholder="08123.."
            />
          </div>
        </div>

        <div className="flex justify-end absolute right-0 bottom-0">
          <ButtonLinks tujuan={"/step-2"} />
        </div>
      </form>
    </div>
  );
}
