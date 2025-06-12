import React, { useContext } from 'react'
import { FaSignOutAlt, FaBell, FaMoon, FaBars, FaSun } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ActiveContext } from '../../context/activeContext';
import { Alert, Confirm } from '../../utils/sweetalert2';

const Navbar = () => {

  const { active, handleSideBar, darkMode, handleDarkMode } = useContext(ActiveContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = await Confirm('آیا مطمئن هستید؟', 'شما میخواهید خارج شوید!', 'question');
    if (confirmLogout.isConfirmed) {
      try {
        localStorage.removeItem('token');
        await Alert("عملیات موفقیت آمیز بود!", "شما خارج شدید!", "success");
        navigate('/auth/login');
      } catch (error) {
        await Alert("خطایی رخ داده است!", error.message, "error");
        console.log(error);
      }
    }
  };

  return (
    <div className='w-full h-16 rounded-xl dark:bg-darkModeBgColor bg-white box_shadow flex items-center justify-between lg:justify-end'>
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
        <button onClick={handleDarkMode} className='ms-5'>
          {
            darkMode ? (
              <FaSun className='text-xl text-gray-200 md:hover:text-rose-500 cursor-pointer' />
            ) : (
              <FaMoon className='text-xl text-mgreen md:hover:text-rose-500 cursor-pointer' />
            )
          }
        </button>
        <button className='ms-5'>
          <FaBell className='text-xl text-mgreen dark:text-gray-200 md:hover:text-rose-500 cursor-pointer' />
        </button>
        <button onClick={handleLogout} className='ms-5'>
          <FaSignOutAlt className='text-xl text-mgreen dark:text-gray-200 md:hover:text-rose-500 cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
