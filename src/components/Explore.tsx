import React from "react";

interface IExploreProps {
  title: string;
  placesAPI: IPlace[];
}

interface IPlace {
    placeImg: string;
    location: string;
    distance: string;
  }

const Explore = ({ title, placesAPI }: IExploreProps) => {
  return (
    <>
      <div className="relative my-7 md:mt-3">
        <div className="travigo-container">
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="travigo-h1">{title}</h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {placesAPI?.map((val, i) => (
              <div key={i} className="flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105">
                <div className="flex items-center">
                    <img src={val.placeImg} alt={val.location} className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg" />
                </div>
                <div className="flex items-start flex-col text-slate-900">
                    <h1 className="text-lg sm:text-sm font-bold">{val.location}</h1>
                    <p className="text-normal lg:text-xs text-base sm:text-xs">{val.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
