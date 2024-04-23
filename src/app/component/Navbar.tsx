import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div className="w-full h-20 lg:h-20 border-b-[1px] border-gray-500 text-black lg:text-black bg-white lg:bg-transparent">
      <div className="max-w-screen-4xl h-full mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl uppercase font-bold">Pallikoodam</h1>
        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">Home</li>
          <li className="navbarLi">About</li>
          <li className="navbarLi">Contact</li>
          </ul>
        
        </div>


        </div>


    </div>
  )
}

export default Navbar;
