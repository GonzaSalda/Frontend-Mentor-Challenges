import React from 'react'
import NavBarAncla from './NavBarAncla'

const NavBar = () => {
  return (
    <>
          <nav className="absolute p-8 flex gap-10 items-center ">
              <a href="#" className='text-white text-4xl mb-2'>Room</a>
              <div className='flex gap-6 text-white'>
                <NavBarAncla text = 'Home'/>
                <NavBarAncla text = 'Shop'/>
                <NavBarAncla text = 'About'/>
                <NavBarAncla text = 'Contact'/>
              </div>
          </nav>
  </>
  )
}

export default NavBar