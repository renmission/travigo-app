import React from "react";
import { Plan, Plancontent } from "../types";

interface IPlansProps {
  planicon: string;
  title: string;
  text: string;
  plantype: string;
  plancontent: Plancontent[];
  buttonText: string;
}

const PriceCard = (plan: IPlansProps) => {
  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="grid items-center">
              <img
                src={plan.planicon}
                alt="planicon/image"
                className="w-14 h-14 lg:h-12 lg:w-12 object-cover"
              />
            </div>
            <div className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm text-gray-900 font-semibold filter drop-shadow-lg">
                {plan.title}
              </h1>
              <p className="font-normal text-sm lg:text-xs text-slate-900">
                {plan.text}
              </p>
            </div>
          </div>
          <div className="grid items-center">
            <h1 className="text-lg lg:text-base md:text-sm text-gray-900 font-bold filter drop-shadow-lg">
              {plan.plantype}
            </h1>
          </div>
        </div>
        <div className="h-[0.1vh] bg-slate-200 my-5"></div>
        <div className="grid items-center gap-3 px-5">
          {plan.plancontent?.map((content, i) => (
            <div key={i} className="flex items-center justify-start gap-5">
              <div className="grid items-center">
                <img
                  src={content.iconbox}
                  alt={content.text}
                  className="lg:w-5 lg:h-5"
                />
              </div>
              <div className="grid items-center">
                <h1 className="font-normal text-lg text-gray-900 filter drop-shadow-lg lg:text-base">
                  {content.text}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="grid items-center justify-items-center mt-7">
          <button className="button-emrald text-base" type="button">
            {plan.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
