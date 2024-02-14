import React from "react";
import PopularProduct from "./PopularProduct";

function MostPopular() {
  return (
    <div className="popular w-full px-36 ">
      <h1 className="text-center text-3xl mt-5 mb-5">#most.Popular</h1>
      <div className="each-popular flex flex-wrap justify-between">
        <PopularProduct  />
      </div>
    </div>
  );
}

export default MostPopular;
