import React from "react";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
}

const Input = ({ type, name, placeholder }: IInputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="py-2 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-full text-base rounded-full relative placeholder:text-slate-500 focus:outline-emerald-400"
      />
    </>
  );
};

export default Input;
