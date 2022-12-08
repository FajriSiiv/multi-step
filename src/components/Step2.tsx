import React, { useEffect, useState } from "react";
import ButtonLinks from "./ButtonLinks";
import { Switch } from "@headlessui/react";
import { IoGameController } from "react-icons/io5";

interface CardProps {
  bgIcon: string;
  title: string;
  price: any;
  children: any;
}

const CardPlan = ({ bgIcon, title, price, children }: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-between h-[200px] border-2 hover:border-marine px-5 py-3 rounded-xl hover:bg-[#F8F9FE] transition-all cursor-pointer`}
    >
      <div>
        <div
          className={`h-14 w-14 rounded-full flex items-center justify-center ]`}
          style={{
            backgroundColor: `${bgIcon}`,
          }}
        >
          {children}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-xl">{title}</p>
        <span className="text-slate-300 text-sm">{price}</span>
      </div>
    </div>
  );
};

export default function StepTwo() {
  const [enabled, setEnabled] = useState<any>(false);

  // useEffect(() => {}, [enabled]);

  return (
    <div className="text-marine relative h-full">
      <h1 className="font-semibold text-3xl">Select your Plan</h1>
      <p className="text-slate-400 text-opacity-80 mt-3">
        You have the option of monthly or yearly billing.
      </p>

      <form className="flex flex-col justify-between text-[16px] pt-10">
        <div className="grid grid-cols-3 gap-x-5">
          <CardPlan bgIcon="#FAB17E" price="$9/mo" title="Arcade">
            <IoGameController className="w-2/4 h-2/4 fill-white" />
          </CardPlan>
          <CardPlan bgIcon="#FC7D8A" price="$12/mo" title="Advance">
            <IoGameController className="w-2/4 h-2/4 fill-white" />
          </CardPlan>
          <CardPlan bgIcon="#473CF7" price="$15/mo" title="Pro">
            <IoGameController className="w-2/4 h-2/4 fill-white" />
          </CardPlan>
        </div>
        <div className="flex gap-x-6 mt-10 rounded-lg bg-[#F8F9FE] py-3 items-center  justify-center">
          <p className="text-lg font-semibold">Monthly</p>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-gray-300" : "bg-marine"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
          <p className="text-lg font-semibold">Yearly</p>
        </div>
        <div className="w-full flex justify-between absolute right-0 bottom-0">
          <ButtonLinks nextStep="Go Back" tujuan={"/step-1"} />
          <ButtonLinks tujuan={"/step-3"} />
        </div>
      </form>
    </div>
  );
}
