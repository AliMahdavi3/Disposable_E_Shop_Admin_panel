import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './siderbar/Sidebar'
import Content from '../pages/Content'
import { ActiveContext } from '../context/ActiveContext';
import { Navigate } from 'react-router-dom';
import { useIsLogin } from '../hook/authHook';

const AdminLayout = () => {

  const [loading, isLogin] = useIsLogin();

  const [active, setActive] = useState(false);
  const handleSideBar = () => {
    setActive(!active);
  }

  return (
    <ActiveContext.Provider value={{ active, setActive, handleSideBar }}>
      {
        loading ? (

          <h1 className='text-center text-4xl pt-32'>لطفا صبر کنید</h1>

        ) : isLogin ? (

          <section className="app-container">
            <Sidebar />
            <div className={`${!active ? 'hidden md:block mx-3 md:me-3 my-3 main-content' : 'mx-3 md:me-3 my-3 main-content'}`}>
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
