import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Services from './Pages/Services'

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}

      <Home />
      <About />


      <Resume />
      <Services />
      <div className='h-screen'>
        Good
      </div>
      <div id='' className='h-screen'>
        Good
      </div>
    </>
  )
}

export default Layout