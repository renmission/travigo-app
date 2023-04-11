import React from "react";
import { Advertise, Banner, Explore, Footer, Hero, Memory, Navbar, Newsletter, Pricing } from "./components";
import { hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero {...hero} />
      <Memory {...memory}/>
      <Explore title="Explore the beauty of the world." placesAPI={placesAPI}/>
      <Advertise title="Ads" brands={brands} />
      <Pricing {...pricingapi} />
      <Banner {...bannerAPI} />
      <Newsletter />
      <Footer {...footerAPI}/>
    </>
  );
};

export default App;
