import React from 'react'

const NavBar = () => {
  return (
    <nav
      className='fixed top-0 left-0 z-50 md:p-9 p-3'
    >

    <img 
      className='w-20 md:w-24'
      src="/images/nav-logo.svg" 
      alt="nav logo" />

    </nav>
  )
}

export default NavBar