import React from "react";
import PriceCard from "./PriceCard";
import { Plan } from "../types";

interface IPricingProps {
  title: string;
  text: string;
  btn1: string;
  btn2: string;
  plans: Plan[];
}

const Pricing = ({ title, text, btn1, btn2, plans }: IPricingProps) => {
  return (
    <>
      <div className="relative my-16" id="pricing">
        <div className="travigo-container">
          <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2">
            <h1 className="travigo-h1">{title}</h1>
            <p className="text-xl lg:text-sm text-gray-900">{text}</p>
            <div className="ring-1 ring-slate-100 rounded-full py-1.5 px-2 flex items-center justify-between gap-5 my-5 shadow-md shadow-slate-200">
              <button type="button" className="button-emrald sm:w-auto">
                {btn1}
              </button>
              <button
                type="button"
                className="button-light sm:w-auto shadow-slate-200 bg-slate-100"
              >
                {btn2}
              </button>
            </div>
          </div>
          <div className="grid items-center grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap-5 m-auto">
            {plans?.map((plan, i) => (
              <PriceCard key={i} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
