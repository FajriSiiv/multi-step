import React from "react";
import ButtonLinks from "./ButtonLinks";

interface CompCheck {
  forLabel: string;
  idCheck: string;
}

const CompoCheck = ({ forLabel, idCheck }: CompCheck) => {
  return (
    <label htmlFor={forLabel}>
      <div className="flex gap-x-5 border-2  border-marine p-3 rounded-lg cursor-pointer hover:bg-bgHover transition-all">
        <div className="w-[10%] flex justify-center items-center">
          <input
            type="checkbox"
            id={idCheck}
            className="w-6 h-6 overflow-hidden "
          />
        </div>
        <div className="w-[85%] flex items-center justify-between ">
          <div>
            <p className="font-semibold">Online Service</p>
            <span className="text-sm text-zinc-400">
              Access to multiplayer games
            </span>
          </div>
          <p className="text-purplish">+$1/mo</p>
        </div>
      </div>
    </label>
  );
};

export default function StepThree() {
  return (
    <div className="text-marine relative h-full">
      <h1 className="font-semibold text-3xl">Pick add-ons</h1>
      <p className="text-slate-400 text-opacity-80 mt-3">
        Add-ons help enchance your gaming experince.
      </p>

      <form className="flex flex-col justify-between text-[16px] pt-10">
        <div className="flex flex-col gap-y-5">
          <CompoCheck forLabel="cek1" idCheck="cek1" />
          <CompoCheck forLabel="cek2" idCheck="cek2" />
          <CompoCheck forLabel="cek3" idCheck="cek3" />
        </div>
        <div className="w-full flex justify-between absolute right-0 bottom-0">
          <ButtonLinks nextStep="Go Back" tujuan={"/step-2"} />

          <ButtonLinks tujuan={"/step-4"} />
        </div>
      </form>
    </div>
  );
}
