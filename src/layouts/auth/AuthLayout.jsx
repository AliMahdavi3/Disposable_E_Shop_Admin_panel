import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import { useIsLogin } from '../../hook/authHook';
import SpinnerLoad from '../../components/SpinnerLoad';

const AuthLayout = () => {

  const [loading, isLogin] = useIsLogin();

  return (
    <>
      {
        loading ? (
          <div className='pt-32'>
          <SpinnerLoad />
          <h1 className='text-center font-bold text-3xl text-gray-500'>لطفا صبر کنید</h1>
        </div>

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
