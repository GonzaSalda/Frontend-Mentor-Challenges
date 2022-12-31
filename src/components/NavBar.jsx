import React from 'react'

const NavBar = () => {
  return (
    <>
          <nav className="flex gap-10 absolute p-8">
              <a href="#">Room</a>
              <div className='flex gap-6 text-white font-semibold'>
                  <a href="#">Home</a>
                  <a href="#">Shop</a>
                  <a href="#">Abot</a>
                  <a href="#">Contact</a>
              </div>
          </nav>
  </>
  )
}

export default NavBar