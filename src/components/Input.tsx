import React from "react";

interface IInputProps {
  type: string;
  name: string;
  value?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, placeholder, value, onChange }: IInputProps) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="py-2 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-full text-base rounded-full relative placeholder:text-slate-500 focus:outline-emerald-400"
      />
    </>
  );
};

export default Input;
