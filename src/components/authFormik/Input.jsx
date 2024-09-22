import { ErrorMessage, FastField } from 'formik'
import React from 'react'

const Input = ({formik, type, name, placeholder, label}) => {
    return (
        <div className="flex flex-col pb-5">
            <label htmlFor={name} className='text-xs md:text-sm font-medium text-gray-500'>{label}</label>
            <FastField type={type}
                className={`${formik.touched[name] && formik.errors[name] ? "border-2 border-rose-600" : null} 
                py-2 placeholder:italic placeholder:text-sm md:placeholder:text-base placeholder:ps-1 rounded-xl mt-3 outline-none px-3 border-2`}
                placeholder={placeholder}
                name={name}
            />
            <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} />
            </div>
        </div>
    )
}

export default Input
