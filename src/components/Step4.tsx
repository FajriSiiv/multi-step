import React from "react";
import ButtonLinks from "./ButtonLinks";

export default function StepFour() {
  return (
    <div className="text-marine relative h-full">
      <h1 className="font-semibold text-3xl">Finishing up</h1>
      <p className="text-slate-400 text-opacity-80 mt-3">
        Double-check everything looks OK before confirming.
      </p>

      <form className="flex flex-col justify-between text-[16px] pt-10">
        <div className="flex flex-col p-5 bg-bgHover rounded-lg">
          <div className="flex items-center justify-between w-full">
            <div className="">
              <p className="font-semibold text-marine">Arcade (Monthly)</p>
              <span>Change</span>
            </div>
            <p className="text-marine">$9/mo</p>
          </div>
          <hr className="my-5 w-[90%] mx-auto" />
          <div className="flex flex-col gap-y-3">
            <div className="flex w-full justify-between items-center">
              <p className="text-zinc-400 text-[15px]">Online Service</p>
              <span>+$1/mo</span>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="text-zinc-400 text-[15px]">Large Storage</p>
              <span>+$2/mo</span>
            </div>
          </div>
        </div>
        <div className="mt-2 w-full flex justify-between items-center p-5">
          <p className="text-zinc-400">Total (per month)</p>
          <span className="text-purplish text-2xl font-bold">+$12/mo</span>
        </div>
        <div className="w-full flex justify-between absolute right-0 bottom-0">
          <ButtonLinks nextStep="Go Back" tujuan={"/step-3"} />
          <ButtonLinks tujuan={"/confirm"} nextStep="Confirm" />
        </div>
      </form>
    </div>
  );
}
