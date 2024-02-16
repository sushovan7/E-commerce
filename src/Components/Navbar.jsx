import React from 'react'
import { BsCartDash } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <div className='bg-gray-300 h-24 flex items-center justify-between px-36 w-full'>
    <Link to='/' className='text-3xl italic'>minero.</Link>
    <div className='flex items-center gap-5'>
      <Link className='text-lg hover:text-blue-500' to='categories'>Categories</Link>
      {/* <Link className='text-lg hover:text-blue-500' to='productpage/:id'>Product Page</Link> */}
      <BsCartDash className='h-10 w-10'/>
    </div>
   </div>
  )
}

export default Navbar