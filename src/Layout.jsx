import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      <div id="home" className=' h-screen border-2'> 
        Mine 
      </div>
      <div id='about' className='h-screen'>
        Good
      </div>
      <div id='resume' className='h-screen'>
              Good
      </div>
    </>
  )
}

export default Layout