import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { navlinks, footerAPI } from "../data";

const MainLayout = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Outlet />
      <Footer {...footerAPI} />
    </>
  );
};

export default MainLayout;
