import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import { useIsLogin } from '../../hook/authHook';

const AuthLayout = () => {

  const [loading, isLogin] = useIsLogin();

  return (
    <>
      {
        loading ? (

          <h1 className='text-center text-4xl pt-32'>لطفا صبر کنید</h1>

        ) : !isLogin ? (

          <Routes>
            <Route path='/auth/login' element={<Login />} />
          </Routes>

        ) : (
          <Navigate to={'/'} />
        )
      }
    </>
  )
}

export default AuthLayout
