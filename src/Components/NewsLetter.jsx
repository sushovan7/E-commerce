import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full h-80 bg-gray-700 mt-20 flex items-center justify-center flex-col gap-5'>
        <h1 className='text-white text-5xl font-bold'>Newsletter</h1>
        <form className='flex items-center justify-center gap-5 w-full' action="submit
        ">
            <input className='h-14 w-1/2 px-5 text-xl' type="text" placeholder='Your@gmail.com' />
            <button className="bg-black h-14 w-28 text-white text-xl hover:opacity-80 ">Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter