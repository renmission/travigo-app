import React from "react";
import {
  Advertise,
  Banner,
  Explore,
  Hero,
  Memory,
  Newsletter,
  Pricing,
} from "../../components";
import {
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  hero,
} from "../../data";

const Home = () => {
  return (
    <>
      <Hero {...hero} />
      <Memory {...memory} />
      <Explore title="Explore the beauty of the world." placesAPI={placesAPI} />
      <Advertise title="Ads" brands={brands} />
      <Pricing {...pricingapi} />
      <Banner {...bannerAPI} />
      <Newsletter />
    </>
  );
};

export default Home;
