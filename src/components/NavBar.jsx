import React, { useState } from 'react'
import NavBarAncla from './NavBarAncla'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'

const NavBar = () => {

  const [active , setActive] = useState(false)

  const handleClick = ()=>{
    setActive(!active)
  }

  return (
    <>
      <nav className="absolute p-8 flex gap-10 items-center w-full ">
        <button
          className='lg:hidden'
          onClick={handleClick}>{active ? (<CloseIcon className='fill-white'/>):(<HamburgerIcon/>) }
          </button>
        <a href="#" className='text-white text-4xl mb-4 pr-5 mx-auto lg:mx-0'>room</a>
        <div className='text-white hidden lg:flex gap-6'>
          <NavBarAncla text='Home' />
          <NavBarAncla text='Shop' />
          <NavBarAncla text='About' />
          <NavBarAncla text='Contact' />
        </div>
      </nav>
  </>
  )
}

export default NavBar