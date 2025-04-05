import { React, useState, useMemo } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from './MenuIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const mobileMenu = useMemo(() => (
    <ul className='md:hidden flex flex-col items-center space-y-2 bg-gray-950 py-2 text-white'>
      {
        ["Home", "About", "Resume", "Services", "Work", "Contact"].map((item) => (
          <li key={item}>
            <Link onClick={toggleMenu} smooth={true} to={`${item.toLowerCase()}`} className='block hover:bg-gray-700 px-4 py-2'>{item}</Link>
          </li>
        ))
      }
    </ul>
  ), []);

  return <>
    <nav className='z-50 fixed bg-black px-6 py-2 w-full'>
      <div className='flex justify-between mx-auto md:px-8 lg:px-15 max-w-7xl'>
        <Link to='#' className='px-6 font-bold text-primary text-2xl'>Mr. Singh</Link>
        <ul className='hidden md:flex space-x-6 py-1 text-1xl text-white'>
          {["Home", "About", "Resume", "Services", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link smooth={true} spy={true} to={`${item.toLowerCase()}`} activeClass='active' className='decoration-primary hover:underline underline-offset-4'>
                {item}
              </Link>

            </li>
          ))}
        </ul>

        <button className='md:hidden focus:outline-none text-white' onClick={toggleMenu}>
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>
      {isOpen && mobileMenu}
    </nav>
  </>
}
