import React from "react";
import header2img from "../img/header/home-img-2.jpg";
import header1img from "../img/header/home-img-1.jpg";
import header3img from "../img/header/home-img-3.jpg";
import header4img from "../img/header/home-img-4.jpg";

function Hero() {
  return (
    <div className="w-full px-36 h-96 gap-2 py-3 flex mb-20">
      <div className="h-left w-6/12 h-full relative bg-black hover:opacity-95">
        <img
          src={header1img}
          alt=""
          className="object-center object-cover h-full w-full opacity-50"
        />
        <h3 className="absolute bottom-0 left-3 text-white text-2xl font-medium">
          Live Comfortably
        </h3>
      </div>
      <div className="h-right w-6/12 flex h-full gap-2 ">
        <div className="skin-care-img w-3/6 h-full relative bg-black hover:opacity-95">
          <img
            src={header2img}
            alt=""
            className="object-center object-cover h-full w-full opacity-50"
          />
          <h3 className="absolute bottom-0 left-3 text-white text-2xl font-medium">
            Skincare
          </h3>
        </div>
        <div className="kitchen-electronics flex flex-col gap-2 w-3/6 h-full">
          <div className="w-full h-2/4 relative bg-black hover:opacity-95">
            <img
              src={header3img}
              alt=""
              className="object-center object-cover h-full w-full opacity-50"
            />
            <h3 className="absolute bottom-0 left-3 text-white text-2xl font-medium">
              Kitchen
            </h3>
          </div>
          <div className="electronics-page w-full h-2/4 relative bg-black hover:opacity-95">
            <img
              src={header4img}
              alt=""
              className="object-center object-cover h-full w-full opacity-50"
            />
            <h3 className="absolute bottom-0 left-3 text-white text-2xl font-medium">
              Electronics
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
