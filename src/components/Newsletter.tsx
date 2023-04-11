import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="p-5 bg-white/60 ring-1 ring-emerald-200 shadow-md shadow-emerald-300 rounded-lg max-w-5xl w-full ml-auto mr-auto mt-0 xl:w-[95vw] relative top-12">
        <div className="flex items-center justify-between lg:flex-col lg:gap-7">
          <div className="grid items-center sm:text-center">
            <h1 className="text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900">Get In Touch With Us:</h1>
            <p className="text-base sm:text-sm xs:text-xs font-medium">
              Questions and Feedback? We would love to hear from you.
            </p>
          </div>
          <form className="flex items-center justify-center relative">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="py-2 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-96 lg:w-[85vw] text-base rounded-full relative placeholder:text-slate-500 focus:outline-emerald-400"
            />
            <button type="submit" className="py-2 px-5 text-white bg-gradient-to-b from-emerald-500 to-green-500 rounded-r-full shadow-lg transition-all duration-200 active:scale-90 absolute right-0 shadow-emerald-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
