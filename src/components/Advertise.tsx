import React from "react";

interface IAdvertiseProps {
  brands: Brands[];
  title: string;
}

interface Brands {
  iconSrc: string;
}

const Advertise = ({ title, brands }: IAdvertiseProps) => {
  return (
    <>
      <div className="flex items-center justify-center text-center mb-11 md:mb-7">
        <h1 className="travigo-h1">{title}</h1>
      </div>
      <div className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
        {brands?.map((val, i) => (
          <img
            key={i}
            src={val.iconSrc}
            alt="brands/icon"
            className="w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md"
          />
        ))}
      </div>
    </>
  );
};

export default Advertise;
