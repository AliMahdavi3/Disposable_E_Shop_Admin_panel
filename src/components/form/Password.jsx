import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Password = ({ formik, type, name, placeholder, label, className }) => {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={`flex flex-col pb-5`}>
            <label htmlFor={name}
                className='text-xs mb-1 mt-3 font-medium text-gray-600'>
                {label}
            </label>
            <div className='relative flex flex-col'>
                <Field
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className={`shadow-sm bg-blue-100 
                    ${formik.touched[name] && formik.errors[name]
                    ? "shadow-rose-600" : 'shadow-gray-700'} 
                    ${className}`}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute left-5 top-3 text-md text-gray-500"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                )}
            </div>

            <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} />
            </div>

        </div>
    )
}

export default Password
