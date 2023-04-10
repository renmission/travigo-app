import React from "react";
import { IMemory } from "../types";

interface IMemoryProps {
  title: string;
  subtitle: string;
  text: string;
  img: string;
  experience: Experience[];
}

interface Experience {
  number: string;
  title: string;
}

const Memory = ({ title, subtitle, text, img, experience }: IMemoryProps) => {
  return (
    <>
      <div className="relative my-16 md:mb-7">
        <div className="travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse">
          <div className="flex items-center justify-start lg:justify-center w-full max-w-md">
            <img src={img} alt="memory/img" className="w-auto h-[55vh] object-fill" />
          </div>
          <div className="grid items-center w-full max-w-2xl lg:text-center">
            <h1 className="travigo-h1">{title}</h1>
            <h1 className="travigo-subtitle">{subtitle}</h1>
            <p className="text-base my-5 sm:text-sm">{text}</p>
            <div className="grid items-center grid-cols-3 gap-7 md:gap-3">
              {experience?.map((val, i) => (
                <div key={i} className="bg-gradient-to-b from-emerald-300 to-green-300 shadow-lg shadow-emerald-200 h-auto w-auto flex  flex-col items-center justify-center text-slate-900 text-center py-7 px-5 xl:py-5 rounded-lg filter cursor-pointer hover:scale-105 transition-all duration-300">
                  <h1 className="text-3xl xl:text-2xl sm:text-2xl font-bold drop-shadow-lg">{val.number}</h1>
                  <p className="text-lg xl:text-base sm:text-sm">{val.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
