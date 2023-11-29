import React from "react";
import Banner from "./components/Home/Banner";
import Cateory from "./components/Home/Cateory";
import HomeProduct from "./components/Home/HomeProduct";
import SmallerBanner from "./components/Home/SmallerBanner";

export default function Home() {
  return (
    <div>
      <Banner />
      <SmallerBanner />
      <Cateory />
      <HomeProduct />
    </div>
  );
}
