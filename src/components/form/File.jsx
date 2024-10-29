import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import FormikError from './FormikError'
import { FaImages } from "react-icons/fa";



const File = ({ name, formik, className, placeholder, label, isMultiple }) => {
    return (
        <div className="flex flex-col mb-5">
            <label htmlFor={name} className='text-xs mb-1 mt-3 font-medium text-gray-600'>
                {label}
                <span className='mx-5 text-amber-600'>
                    اگر بعد از انتخاب تصویر, نام تصویر نمایش داده نشد. دلیل آن انتخاب دوباره عکس آپلود شده قبلی است
                </span>
            </label>
            <FastField>
                {({ form }) => (
                    <div className='relative'>
                        <input
                            className='shadow-sm absolute inset-0 opacity-0 cursor-pointer'
                            onChange={(e) => {
                                const files = Array.from(e.currentTarget.files);
                                if (isMultiple) {
                                    form.setFieldValue(name, files); // Set multiple files
                                } else {
                                    form.setFieldValue(name, files[0]); // Set single file
                                }
                            }}
                            placeholder={placeholder}
                            type="file"
                            name={name}
                            id={name}
                            multiple={isMultiple} // Allow multiple only if isMultiple is true
                        />

                        <button type="button"
                            className={`shadow-sm bg-blue-100 ${formik.touched[name] && formik.errors[name] ?
                                "shadow-rose-600" : 'shadow-gray-700'} ${className}`}>
                            <FaImages className='text-xl' />
                            <span className='ms-2'>بارگذاری {placeholder}</span>
                        </button>

                        {formik.values[name] && (
                            <div className="mt-2">
                                <p className="text-sm font-medium text-gray-600">فایل انتخاب شده:</p>
                                {isMultiple ? (
                                    <ul className="pl-5 mt-1">
                                        {Array.isArray(formik.values[name]) && formik.values[name].map((file, index) => (
                                            <li key={index} className="text-gray-800">{file.name}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-800">{formik.values[name]?.name}</p> // Display single file name
                                )}
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
