import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import FormikError from './FormikError'

const Textarea = ({ name, label, formik, placeholder, className, cols, rows }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className='text-xs mb-1 mt-3 font-medium text-gray-600'>{label}</label>
            
            <FastField className={`shadow-sm bg-blue-100 ${formik.touched[name] && formik.errors[name] ?
                "shadow-rose-600" : 'shadow-gray-700'} 
                ${className}`}
                as="textarea"
                placeholder={placeholder}
                name={name}
                id={name}
                cols={cols}
                rows={rows}
            />

            <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} component={FormikError}/>
            </div>
        </div>
    )
}

export default Textarea
