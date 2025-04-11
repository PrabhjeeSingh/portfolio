import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import HeroSection from './components/HeroSection'
import AIFeatureSection from './components/AiFeatureSection'
import ProjectsSection from './components/ProjectsSection'
import TechStackSection from './components/TechStackStation'
import Aboutv from './Pages/Aboutv'
import AnimatedHero from '../Trash/AnimatedHero'
import ExperiencePage from './Pages/ExperiencePage'
import AwardsSection from './components/AwardsSection'
import ContactPage from './Pages/ContactPage'

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}

      <Home id="home"/>
      {/* <About />
      <Resume />  
      <Contact /> */}
    
      {/* <AnimatedHero /> */}
      <About />
      {/* <Aboutv /> */}
      <AwardsSection />
      <ExperiencePage />
      <TechStackSection />
    
      
      <ProjectsSection />
      <Services />
      {/* <AIFeatureSection /> */}
      <ContactPage />
     
      
    </>
  )
}

export default Layout