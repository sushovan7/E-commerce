import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function CategoriesHeader() {
    const [btnName,setBtnName] = useState('ALL')
  return (
    <div className="catagory-header">
      <Link to="/" className="flex items-center px-36 mt-20 text-xl">
        <MdKeyboardDoubleArrowLeft className="w-10 h-10"/>
        <p>Home</p>
      </Link>
      <h1 className="text-2xl text-center font-bold">{btnName}</h1>
      <div className="filter-btn flex items-center justify-center gap-10 mt-7">
      <Link to="all" className="border-solid border-2 border-grey-500 hover:border-black p-1" onClick={() => setBtnName("All")}>
              <button>All</button>
            </Link>
            <Link to="furnitures" className="border-solid border-2 border-grey-500 hover:border-black p-1">
              <button onClick={() => setBtnName("Furnitures")}>
                Furnitures
              </button>
            </Link>
            <Link className="border-solid border-2 border-grey-500 hover:border-black p-1" to="electronics">
              <button onClick={() => setBtnName("Electronics")}>
                Electronics
              </button>
            </Link>
            <Link to="lamps" className="border-solid border-2 border-grey-500 hover:border-black p-1">
              <button onClick={() => setBtnName("Lamps")}>Lamps</button>
            </Link>
            <Link to="kitchen" className="border-solid border-2 border-grey-500 hover:border-black p-1">
              <button onClick={() => setBtnName("Kitchen")}>Kitchen</button>
            </Link>
            <Link to="chairs" className="border-solid border-2 border-grey-500 hover:border-black p-1">
              <button onClick={() => setBtnName("Chairs")}>Chairs</button>
            </Link>
            <Link to="skincare" className="border-solid border-2 border-grey-500 hover:border-black p-1">
              <button onClick={() => setBtnName("Skincare")}>
                Skin Care
              </button>
            </Link>
      </div>
    </div>
  );
}

export default CategoriesHeader;
