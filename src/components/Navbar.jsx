import { React, useState, useMemo } from 'react'
import {Link} from 'react-scroll'
import MenuIcon from './MenuIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  
  const mobileMenu = useMemo(() => (
    <ul className='md:hidden flex flex-col items-center bg-gray-950 text-white space-y-2 py-2 '>
      {
        ["Home", "About", "Resume", "Services", "Work", "Contact"].map((item) => (
          <li key={item}>
            <Link className='block px-4 py-2 hover:bg-gray-700'>{item}</Link>
          </li>
        ))
      }
    </ul>
  ), []);
  
  return <>
    <nav className='bg-black px-6 py-2 w-full fixed '>
      <div className='flex justify-between md:px-8 lg:px-15 mx-auto max-w-7xl'>
        <Link to='#' className='text-primary text-2xl font-bold px-6'>Mr. Singh</Link>
        <ul className='hidden md:flex space-x-6 text-white text-1xl py-1'>
          {["Home", "About", "Resume", "Services", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link smooth={true} spy={true} to={`${item.toLowerCase()}`} activeClass='active' className='hover:underline underline-offset-4 decoration-primary '>
                {item}
              </Link>
              
            </li>
          ))}
        </ul>
     
      <button className='md:hidden text-white focus:outline-none' onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </button>
      </div>
      {isOpen && mobileMenu}
    </nav>
  </>
}
