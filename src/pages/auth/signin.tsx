import React, { useState } from "react";
import { Button, Input } from "../../components";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { AppDispatch } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { signIn } from "../../features/auth/authSlice";

interface ISignInProps {
  title: string;
  text: string;
  btnText: string;
}

const SignIn = ({ title, text, btnText }: ISignInProps) => {
  const dispatch: AppDispatch = useAppDispatch();
  const error = useAppSelector(state => state.auth.error);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  // const onSubmit = handleSubmit(data => console.log(data));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  }

  return (
    <>
      <div className="p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-200">
        <div className="flex flex-col items-center justify-center">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo/img" className="w-34 h-16 object-fill my-6" />
          </NavLink>
          <h1 className="travigo-h2 text-center">{title}</h1>
          <NavLink to={"signup"}>
            <p className="travigo-text">{text}</p>
          </NavLink>
          
          <div className="flex flex-col items-center justify-center py-4">
          <p className="text-slate-500 text-base font-normal">test@gmail.com</p>
          <p className="text-slate-500 text-base font-normal">pass1234</p>
          </div>
        </div>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center space-y-2 pb-6">
          <Input name="email" type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value) }/>
          <Input name="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value) } />
          <Button text={btnText} />
        </form>
      </div>
    </>
  );
};

export default SignIn;
