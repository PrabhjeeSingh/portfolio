import { React, useState, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from './MenuIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  
  const mobileMenu = useMemo(() => (
    <ul className='md:hidden flex flex-col items-center bg-gray-950 text-white space-y-2 py-2 '>
      {
        ["Home", "About", "Resume", "Services", "Work", "Contact"].map((item) => (
          <li key={item}>
            <NavLink className='block px-4 py-2 hover:bg-gray-700'>{item}</NavLink>
          </li>
        ))
      }
    </ul>
  ), []);
  
  return <>
    <nav className='bg-black px-6 py-2 w-full '>
      <div className='flex justify-between md:px-8 lg:px-15 mx-auto max-w-7xl'>
        <NavLink to='#' className='text-primary text-2xl font-bold px-6'>Mr. Singh</NavLink>
        <ul className='hidden md:flex space-x-6 text-white text-1xl py-1'>
          {["Home", "About", "Resume", "Services", "Work", "Contact"].map((item) => (
            <li key={item}>
              <NavLink to={`/${item==='Home' ? "": item.toLowerCase()}`} className={({isActive})=>
                `hover:underline underline-offset-4 decoration-primary ${isActive ? "underline underline-offset-4 decoration-primary" :"" }`
              }>
                {item}
              </NavLink>
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




// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState('False');

//   return (
//     <nav className="bg-black px-4 py-2">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <a href="#" className="text-yellow-400 text-2xl font-bold">Mr. Singh</a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-white">
//           <li><a href="#" className="hover:text-yellow-400">Home</a></li>
//           <li><a href="#" className="hover:text-yellow-400">About</a></li>
//           <li><a href="#" className="hover:text-yellow-400">Resume</a></li>
//           <li><a href="#" className="hover:text-yellow-400">Services</a></li>
//           <li><a href="#" className="hover:text-yellow-400">Work</a></li>
//           <li><a href="#" className="hover:text-yellow-400">Clients</a></li>
//           <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {/* Hamburger Icon */}
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-gray-900 text-white space-y-2 py-2">
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a></li>
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a></li>
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Resume</a></li>
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a></li>
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Work</a></li>
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Clients</a></li>
//           <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a></li>
//         </ul>
//       )}
//     </nav>
// )
// }

// export default Navbar;

// // Separate Menu Icon Component
// const MenuIcon = ({ isOpen }) => (
//   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//     {isOpen ? (
//       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//     ) : (
//       <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
//     )}
//   </svg>
// );

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   // Memoized Mobile Menu
//   const mobileMenu = useMemo(() => (
//     <ul className="md:hidden bg-gray-900 text-white space-y-2 py-2">
//       {["Home", "About", "Resume", "Services", "Work", "Clients", "Contact"].map((item) => (
//         <li key={item}>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-700">{item}</a>
//         </li>
//       ))}
//     </ul>
//   ), []);

//   return (
//     <nav className="bg-black px-4 py-2">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <a href="#" className="text-yellow-400 text-2xl font-bold">Mr. Singh</a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-white">
//           {["Home", "About", "Resume", "Services", "Work", "Clients", "Contact"].map((item) => (
//             <li key={item}>
//               <a href="#" className="hover:text-yellow-400">{item}</a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
//           <MenuIcon isOpen={isOpen} />
//         </button>
//       </div>

//       {/* Render Mobile Menu Conditionally */}
//       {isOpen && mobileMenu}
//     </nav>
//   );
// }
