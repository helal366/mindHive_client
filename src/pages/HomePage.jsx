import React, { useEffect } from "react";
import Motions from "../components/homePageComponents/Motions";
import BannerTitle from "../components/homePageComponents/BannerTitle";

const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="hero bg-base-200 min-h-screen my-10 rounded-lg shadow-2xl py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[42%_55%] gap-[1%] px-[1%]">
        <BannerTitle/>
        <Motions />
      </div>
    </div>
  );
};

export default HomePage;
