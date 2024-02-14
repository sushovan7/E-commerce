import React from "react";
import bannerImg1 from '../img/banner/banner2.jpg'

function Banner() {
  return (
    <div className="banner h-96  w-4/5 bg-gray-400 mt-20 relative left-1/2 translate-x-[-50%] flex ">
      <div className="banner-left h-full w-1/2 flex gap-4 flex-col p-20">
        <h1 className="text-4xl font-semibold">Creative <br /> harmonius living</h1>
        <p className="text-xl mb-5">Minero Products are all made to standard sizes so that you can mix and match them freely.</p>
        <button className="bg-black text-white text-2xl p-5 hover:opacity-80 ">SHOP NOW</button>
      </div>
      <div className="banner-right h-full w-1/2">
        <img className="h-full w-full object-cover object-center" src={bannerImg1} alt="" />
      </div>
    </div>
  );
}

export default Banner;