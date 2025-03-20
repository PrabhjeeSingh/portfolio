import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="bg-gray-800 text-white text-center p-4">
        <img src={viteLogo} alt="Vite Logo" className="inline h-8" />
        <img src={reactLogo} alt="React Logo" className="inline h-8" />
        <p className="inline p-4"> + Tailwind CSS</p>
      </header>
      <main className="p-4">
        <h1 className="text-2xl font-bold text-center">Hello Vite + React!</h1>
        <p className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </main>
    </>
  )
}

export default App
