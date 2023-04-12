import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { navlinks, footerAPI } from "../data";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

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
