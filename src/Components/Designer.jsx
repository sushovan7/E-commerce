import React from 'react'

function Designer() {
  return (
    <div className='h-52 bg-black w-full flex items-center justify-center flex-col gap-5 text-white'>
        <div className="contact flex items-center gap-5">
            <p className="contacts">About</p>
            <p className="contacts">Store locator</p>
            <p className="contacts">FAQs</p>
            <p className="contacts">News</p>
            <p className="contacts">Careers</p>
            <p className="contacts">Contact Us</p>
        </div>
        <div className="Design">
            <h1 className='italic text-xl mr-5'> Minero || Sushovan Bhattarai</h1>
        </div>
    </div>
  )
}

export default Designer