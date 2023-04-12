import React from "react";
import { Button, Input } from "../../components";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

interface ILoginProps {
  title: string;
  text: string;
  btnText: string;
}

const Register = ({ title, text, btnText }: ILoginProps) => {
  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200">
        <div className="flex flex-col items-center justify-center">
          <NavLink to={`/`} className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className="w-34 h-16 object-fill my-6"
            />
          </NavLink>
          <h1 className="travigo-h2 text-center">{title}</h1>
          <NavLink to={"/auth"}>
            <p className="travigo-text">{text}</p>
          </NavLink>
        </div>
        <form className="flex flex-col items-center justify-center space-y-2 pb-6">
          <Input name="name" type="text" placeholder="Enter Name" />
          <Input name="email" type="email" placeholder="Email address" />
          <Input name="password" type="password" placeholder="Password" />
          <Input
            name="password2"
            type="password"
            placeholder="Confirm Password"
          />
          <Button text={btnText} />
        </form>
      </div>
    </>
  );
};

export default Register;
