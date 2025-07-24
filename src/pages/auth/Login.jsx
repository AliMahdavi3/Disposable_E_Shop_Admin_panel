import React, { useState } from 'react'
import { Form, Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { authModeValue, initialValues, onSubmit, validationSchema } from './Core';
import AuthFormik from '../../components/authFormik/AuthFormik';


const Login = () => {

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className='mt-16 rounded-2xl pb-10 w-full h-fit flex justify-center'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => onSubmit(values, actions, setLogin, navigate)}
                    validationSchema={validationSchema}
                >
                    {
                        formik => {
                            return (
                                <div className='grid grid-cols-2 rounded-2xl shadow-md shadow-mgreen w-[85%]'>
                                    <div className="col-span-2 md:col-span-1 bg-white bg-opacity-50 rounded-r-2xl">

                                        <h3 className='px-5 md:px-10 pt-10 pb-5 md:text-lg 
                                        font-medium text-center text-gray-500'>ورود اعضا</h3>

                                        <Form className='px-5 md:px-10'>

                                            <AuthFormik
                                                control="radio"
                                                formik={formik}
                                                name="auth_mode"
                                                options={authModeValue}
                                            />

                                            {
                                                formik.values.auth_mode === 'phone' ? (
                                                    <AuthFormik
                                                        control="input"
                                                        formik={formik}
                                                        type="text"
                                                        name="phone"
                                                        label="شماره همراه"
                                                        placeholder="09123456789"
                                                    />
                                                ) : (
                                                    <AuthFormik
                                                        control="input"
                                                        formik={formik}
                                                        type="email"
                                                        name="email"
                                                        label="ایمیل"
                                                        placeholder="aaa@example.bbb"
                                                    />

                                                )
                                            }

                                            <AuthFormik
                                                control="input"
                                                formik={formik}
                                                type="password"
                                                name="password"
                                                label="رمزعبور"
                                                placeholder="رمزعبور"
                                            />

                                            <div className='pb-5'>
                                                <button
                                                    type='submit'
                                                    disabled={formik.isSubmitting}
                                                    className={`w-full text-white font-medium py-2 rounded-3xl cursor-pointer text-sm md:text-base
                                                    ${formik.isSubmitting ? 'bg-mgreen bg-opacity-50' : 'bg-mgreen md:hover:bg-indigo-500'}`}
                                                >
                                                    {formik.isSubmitting ? 'لطفا صبر کنید...' : 'ورود'}
                                                </button>
                                            </div>

                                        </Form>

                                        <div className='text-center pb-5'>
                                            <a className='text-blue-600 hover:text-rose-600 text-xs' href="/login">رمزعبور خود را فراموش کرده اید ؟</a>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex md:justify-center md:items-center sm:col-span-1 px-10 py-10 rounded-l-2xl bg-white">
                                        <img className='w-[80%]' src="/assets/images/auth.jpg" alt="" />
                                    </div>
                                </div>
                            )
                        }
                    }
                </Formik>
            </div>
        </>
    )
}

export default Login
