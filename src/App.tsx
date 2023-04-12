import React from "react";
import {
  Advertise,
  Banner,
  Explore,
  Footer,
  Hero,
  Memory,
  Navbar,
  Newsletter,
  Pricing,
} from "./components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data";
import { RouterProvider } from "react-router-dom";
import router from "./router";


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
