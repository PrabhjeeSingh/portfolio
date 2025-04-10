import React from 'react'

const Contact = () => {
  return (
      <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
          style={{
              backgroundImage: "url('/contact.jpeg')", // Replace with your image path
          }}
      >
          <div className="bg-black bg-opacity-50 w-full max-w-6xl rounded-lg shadow-lg flex flex-col lg:flex-row p-6 lg:p-12">

              {/* Left: Form */}
              <div className="w-full lg:w-1/2 text-white space-y-4">
                  <h2 className="text-4xl font-bold">Get In Touch</h2>
                  <div className="h-1 w-24 bg-yellow-400 mb-6" />

                  <form className="space-y-4">
                      <input
                          type="text"
                          placeholder="Name"
                          className="w-full p-3 bg-black bg-opacity-40 rounded-full border border-black text-white placeholder-gray-300 focus:outline-none"
                      />
                      <input
                          type="email"
                          placeholder="Email"
                          className="w-full p-3 bg-black bg-opacity-40 rounded-full border border-black text-white placeholder-gray-300 focus:outline-none"
                      />
                      <input
                          type="text"
                          placeholder="Subject"
                          className="w-full p-3 bg-black bg-opacity-40 rounded-full border border-black text-white placeholder-gray-300 focus:outline-none"
                      />
                      <textarea
                          placeholder="Message"
                          rows="4"
                          className="w-full p-3 bg-black bg-opacity-40 rounded-xl border border-black text-white placeholder-gray-300 focus:outline-none"
                      />
                      <button
                          type="submit"
                          className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300"
                      >
                          Submit
                      </button>
                  </form>
                  
              </div>

              {/* Right: Info */}
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
                  <div className="text-white text-center space-y-8">
                      <div>
                          <h3 className="text-xl font-bold">Phone:</h3>
                          <p>+1 (647)-xxx-xxxx</p>
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Email:</h3>
                          <p>prabhjeesingh1@gmail.com</p>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default Contact