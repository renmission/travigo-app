import React from "react";
import { Button, Input } from "../../components";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

interface ILoginProps {
  title: string;
  text: string;
  btnText: string;
}

const Login = ({ title, text, btnText }: ILoginProps) => {
  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200">
        <div className="flex flex-col items-center justify-center">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo/img" className="w-34 h-16 object-fill my-6" />
          </NavLink>
          <h1 className="travigo-h2 text-center">{title}</h1>
          <NavLink to={"register"}>
            <p className="travigo-text">{text}</p>
          </NavLink>
        </div>
        <form className="flex flex-col items-center justify-center space-y-2">
          <Input name="email" type="email" placeholder="Email address" />
          <Input name="password" type="password" placeholder="Password" />
          <Button text={btnText} />
        </form>
      </div>
    </>
  );
};

export default Login;
