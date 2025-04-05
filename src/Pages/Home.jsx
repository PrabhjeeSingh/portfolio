import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const words = ["Software Developer", "ML Engineer", "Tech Enthusiast"]

const Home = () => {
    
  return (
      <div id="home" className="relative min-w-screen min-h-screen">
          {/* Background image with reduced brightness */}
          <div className="z-0 absolute inset-0 bg-[url(src/assets/berg.jpg)] bg-cover bg-no-repeat bg-fixed brightness-50" />

          {/* Content with full brightness */}
          <div className="z-10 relative flex justify-center items-center min-h-screen text-white">
              <div className="text-center">
                  <h2 className="text-yellow-500 text-lg">Hi,</h2>
                  <h1 className="mt-2 font-bold text-4xl">I AM PRABHJEE SINGH</h1>
                  <h2 className="mt-2 text-2xl">
                      <span className="write1">ML Engineer</span>
                      <span className="write2">Software Developer</span>
                  </h2>
                  <div className='flex justify-center mt-5'>
                      <a href="https://github.com/PrabhjeeSingh"> <FaGithub className="mt-2 hover:text-primary text-2xl" /></a>
                      <a href="https://www.linkedin.com/in/prabhjeesingh"><FaLinkedin className="mt-2 ml-2 hover:text-primary text-2xl"/></a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Home