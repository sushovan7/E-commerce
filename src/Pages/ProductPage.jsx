import React, { useContext } from "react";
import { items } from "../data";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TrendingNow from "../Components/TrendingNow";

// import { useCart } from "../context/CartProvider";


function ProductPage() {


  const {id}= useParams();
  const item = items.filter((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);
  const changeImage = (e) => {
    setImage(e.target.src);
  };

  // const {dispatch} = useCart()

// function handleAdd(){
//   console.log('handleAdd called')
//   const newCartItem = {id:id,price:item.price,description:item.description,img:item[0].img,quantity:1}
//   dispatch({
//     type:"ADD_ITEM",payload:''
//   })
// }

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * item[0].price;
  };

  return (
    <> <div className="product-page h-screen w-4/5 mt-5 relative left-1/2 translate-x-[-50%] flex gap-3 ">
      <div className="description text-3xl font-bold italic absolute left-1/2 top-7 translate-x-[-50%] ">{item[0].description}</div>
    <div className="left h-4/5 w-1/2 bg-gray-300 p-5  flex flex-col gap-10 ">
      
      <div className="product-details mt-20 ">
        <p className="text-lg font-normal">
         {item[0].specs}
        </p>
      </div>
      <div className="product-quantity flex items-center justify-between">
        <p className="text-2xl font-bold">Quantity</p>
        <div className="quantity-amount flex items-center gap-6  ">
          <button
            onClick={decrease}
            className="p-3 bg-white outline outline-offset-2 outline-black-500 hover:bg-gray-300 font-bold"
          >
            -
          </button>
          <p className="font-bold">{quantity}</p>
          <button
            onClick={increase}
            className="p-3 bg-white outline outline-offset-2 outline-black-500 hover:bg-gray-300 font-bold"
          >
            +
          </button>
        </div>
        <p className="text-2xl font-bold">{calcPrice(quantity)}.00$</p>
      </div>
      <div className="add-cart flex items-center gap-5">
        <button className="bg-black text-white text-2xl p-5 hover:opacity-80 ">
          ADD TO CART
        </button>
        <button className="bg-black text-white text-2xl p-5 hover:opacity-80 ">
          BUY NOW
        </button>
      </div>
      <div className="more-details flex items-center gap-5 mt-5 justify-between">
        <div className="more-detail">
          <p className="text-2xl font-bold">Texture:</p>
          <p>{item[0].texture}</p>
        </div>
        <div className="more-detail">
          <p className="text-2xl font-bold">Weight:</p>
          <p>{item[0].weight}</p>
        </div>
        <div className="more-detail">
          <p className="text-2xl font-bold">Size:</p>
          <p>{item[0].size}</p>
        </div>
      </div>
    </div>
    <div className="right w-1/2 h-full  p-10">
      <div className="main-img w-full h-2/3">
        <img
            onMouseOver={changeImage}
            src={image}
            alt="product"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="more-img w-full h-2/6 -mt-10  flex items-center justify-between ">
        <img className="object-center object-cover h-1/2 mr-2"  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"/>
        <img className="object-center object-cover h-1/2 mr-2"   onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product" />
        <img className="object-center object-cover h-1/2"   onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product" />
      </div>
    </div>
  </div>
  <TrendingNow />
  </>
   
  );
}

export default ProductPage;
