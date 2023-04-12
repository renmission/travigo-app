import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <>
      <div className="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
