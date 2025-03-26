import React from 'react'

const words = ["Software Developer", "ML Engineer", "Tech Enthusiast"]

const Home = () => {
    
  return (
      <div id="home" className="relative min-h-screen min-w-screen">
          {/* Background image with reduced brightness */}
          <div className="absolute inset-0 bg-[url(src/assets/berg.jpg)] bg-fixed brightness-50 z-0" />

          {/* Content with full brightness */}
          <div className="relative z-10 flex min-h-screen items-center justify-center text-white">
              <div className="text-center">
                  <h2 className="text-lg text-yellow-500">Hi,</h2>
                  <h1 className="text-4xl font-bold mt-2">I AM PRABHJEE SINGH</h1>
                  <h2 className="text-2xl mt-2">
                      <span className="write1 ">ML Engineer</span>
                      <span className="write2 ">Software Developer</span>
                  </h2>
              </div>
          </div>
      </div>
  )
}

export default Home