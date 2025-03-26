import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      
      <Home />
      <About />
     
      <div className='h-screen'>
        Good
      </div>
      <div id='resume' className='h-screen'>
              Good
      </div>
    </>
  )
}

export default Layout