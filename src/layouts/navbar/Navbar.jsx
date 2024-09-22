import React, { useContext } from 'react'
import { FaSignOutAlt, FaBell, FaMoon, FaBars } from "react-icons/fa";
import { ActiveContext } from '../../context/ActiveContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../utils/alert';
import swal from 'sweetalert';

const Navbar = () => {

  const { active, handleSideBar } = useContext(ActiveContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = await swal({
      title: "آیا مطمئن هستید؟",
      text: "شما می خواهید خارج شوید!",
      icon: "warning",
      buttons: ["لغو", "خروج"],
      dangerMode: true,
    });

    if (confirmLogout) {
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
        <button onClick={handleLogout} className='ms-5'>
          <FaSignOutAlt className='text-xl text-mgreen md:hover:text-rose-500 cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default Navbar
