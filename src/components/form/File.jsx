import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import FormikError from './FormikError'
import { FaImages } from "react-icons/fa";



const File = ({ name, formik, className, placeholder, label }) => {
    return (
        <div className="flex flex-col mb-5">
            <label htmlFor={name} className='text-xs mb-1 mt-3 font-medium text-gray-600'>{label}</label>
            <FastField>
                {({ form }) => (
                    <div className='relative'>
                        <input
                            className='shadow-sm absolute inset-0 opacity-0 cursor-pointer'
                            onChange={(e) => {
                                const files = Array.from(e.currentTarget.files);
                                form.setFieldValue(name, files);
                            }}
                            placeholder={placeholder}
                            type="file"
                            name={name}
                            id={name}
                            multiple
                        />

                        <button type="button"
                            className={`shadow-sm bg-blue-100 ${formik.touched[name] && formik.errors[name] ?
                                "shadow-rose-600" : 'shadow-gray-700'} ${className}`}>
                            <FaImages className='text-xl' />
                            <span className='ms-2'>بارگذاری تصاویر</span>
                        </button>

                        {formik.values[name] && formik.values[name].length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm font-medium text-gray-600">فایل‌های انتخاب شده:</p>
                                <ul className="pl-5 mt-1">
                                    {formik.values[name].map((file, index) => (
                                        <li key={index} className="text-gray-800">{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                )}
            </FastField>

            <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} component={FormikError} />
            </div>
        </div>
    )
}

export default File
