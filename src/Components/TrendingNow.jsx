import React from "react";
import TrendingProduct from "./TrendingProduct";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function TrendingNow() {

function slideLeft(){
    let slider = document.getElementById("img-slider");
    slider.scrollLeft -=  250;
}

function slideRight(){
    let slider = document.getElementById("img-slider");
    slider.scrollLeft +=  250;
}


  return (
    <div className="popular w-full px-36 mt-20">
      <div className="trends-arrow flex justify-between items-center">
        <h1 className="text-start text-3xl mt-5 mb-5">Trending Now</h1>
        <div className="arrow-slider flex items-center gap-4">
          <button onClick={slideLeft} 
           id='arrow' className="border p-4 hover:cursor-pointer hover:bg-gray-500">
            <FaArrowLeftLong />
          </button>
          <button onClick={slideRight} 
          id='arrow' className="border p-4 hover:cursor-pointer hover:bg-gray-500">
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div id='img-slider' className="each-popular overflow-x-scroll overflow-y-hidden flex whitespace-nowrap scroll-smooth relative ">
        <TrendingProduct />
      </div>
    </div>
  );
}

export default TrendingNow;
