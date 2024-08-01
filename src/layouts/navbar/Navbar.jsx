import React, { useContext } from 'react'
import { FaSignOutAlt, FaBell, FaMoon, FaBars } from "react-icons/fa";
import { ActiveContext } from '../../context/ActiveContext';


const Navbar = () => {

  const { active, handleSideBar } = useContext(ActiveContext);

  return (
    <div className='w-full h-16 rounded-xl bg-white box_shadow flex items-center justify-between lg:justify-end'>
      <div className='flex lg:hidden'>
        {
          active ? (
            <button onClick={handleSideBar} className='px-5 py-2 rounded-3'>
              <FaBars className='text-mgreen text-xl' />
            </button>
          ) : null
        }
      </div>
      <div className={`${!active ? "hidden md:block px-5 pt-1" : "px-5 pt-1"}`}>
        <button className='ms-5'>
          <FaMoon className='text-xl text-mgreen md:hover:text-rose-500 cursor-pointer' />
        </button>
        <button className='ms-5'>
          <FaBell className='text-xl text-mgreen md:hover:text-rose-500 cursor-pointer' />
        </button>
        <button className='ms-5'>
          <FaSignOutAlt className='text-xl text-mgreen md:hover:text-rose-500 cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
