import React from 'react'
import { items } from "../data";
import { Link } from 'react-router-dom';

function PopularProduct() {
   const filteredItems = items.filter((item)=> (
    item.id <=8
   ))
  return (
    <>
      {filteredItems.map((item)=>(
        <Link onClick={()=>window.scrollTo(0,0)} to={`categories/productpage/${item.id}`} key={item.id} className="product-info h-80 w-60 m-2  px-2 border-solid border-2 border-grey-500 hover:border-black">
        <div className='img-container h-3/4 mb-5'>
          <img src={item.img} alt="" className="  object-cover object-center h-full "/>
        </div>
        <div className="title-price flex items-start flex-col justify-end">
          <h4>{item.description}</h4>
          <h3>{item.price} $</h3>
        </div>
      </Link>
    ))}</>
   
  )
}

export default PopularProduct