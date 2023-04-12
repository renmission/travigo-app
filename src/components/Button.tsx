import React from "react";

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return (
    <>
      <button className="button-emrald text-base py-2 w-full">{text}</button>
    </>
  );
};

export default Button;
