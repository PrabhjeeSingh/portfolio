import React from 'react'

const MenuIcon = ({ isOpen }) => {
    return (
      <>
        <svg className='w-6 h-6' stroke='white' fill='none' viewBox='0 0 24 24' strokeWidth="2">
            {!isOpen ? (
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-16 6h16'/>
             ):(
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            )}
        </svg>
      </>
    )
}

export default MenuIcon