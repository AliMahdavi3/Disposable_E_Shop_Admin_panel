import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './siderbar/Sidebar'
import Content from '../pages/Content'
import { Navigate } from 'react-router-dom';
import { useIsLogin } from '../hook/authHook';
import { ActiveContext } from '../context/activeContext';
import SpinnerLoad from '../components/SpinnerLoad';

const AdminLayout = () => {

  const [loading, isLogin] = useIsLogin();

  const [active, setActive] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleSideBar = () => {
    setActive(!active);
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  // Effect to toggle dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  

  return (
    <ActiveContext.Provider value={{
      active,
      setActive,
      handleSideBar,
      darkMode,
      setDarkMode,
      handleDarkMode,
    }}>
      {
        loading ? (
          <div className='pt-32'>
            <SpinnerLoad />
            <h1 className='text-center font-bold text-3xl text-gray-500'>لطفا صبر کنید</h1>
          </div>

        ) : isLogin ? (

          <section className={`app-container ${darkMode && "dark"}`}>
            <Sidebar />
            <div className={`${!active ? 'hidden md:block mx-3 md:me-3 my-3 main-content' :
              'mx-3 md:me-3 my-3 main-content'} ${darkMode ? 'dark-mode-bg' : 'light-mode-bg'}`}>
              <Navbar />
              <Content />
            </div>
          </section>

        ) : (
          <Navigate to={'/auth/login'} />
        )
      }
    </ActiveContext.Provider>
  )
}

export default AdminLayout
