import React from "react";

interface IHeroProps {
  title: string;
  subtitle: string;
  btn1: string;
  btn2: string;
  text: string;
  img: string;
}

const Hero = ({ title, subtitle, btn1, btn2, text, img }: IHeroProps) => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
      <div className="grid items-start justify-items-center tap-contianer">
        <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
          <h1 className="travigo-h1">{title}</h1>
          <h1 className="travigo-subtitle">{subtitle}</h1>
          <p className="text-base my-5 text-center sm:text-sm">{text}</p>
          <div className="flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full">
            <button type="button" className="button-emrald">
              {btn1}
            </button>
            <button type="button" className="button-light">
              {btn2}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mb-11">
          <img src={img} alt="dashboard/img" className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
