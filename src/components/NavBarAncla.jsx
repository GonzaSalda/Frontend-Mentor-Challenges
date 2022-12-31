import React from 'react'

const NavBarAncla = ({text}) => {
  return (
      <> 
        <a href="#" className='font-bold'>
          <span className='peer'>{text}</span>
          <span className='block h-1 w-full scale-x-0 transition-all duration-500 peer-hover:scale-x-100 peer-hover:bg-white'></span>
        </a>
      </>
  )
}

export default NavBarAncla