import React from 'react'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Projects from './Pages/Projects'
import ExperiencePage from './Pages/ExperiencePage'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/About'

const Layout = () => {
  return (
    <>
      <Navbar />   
      <Home />
      <AboutPage />
      <ExperiencePage /> 
      <Projects />
      <Services />
      <ContactPage />
     
      
    </>
  )
}

export default Layout