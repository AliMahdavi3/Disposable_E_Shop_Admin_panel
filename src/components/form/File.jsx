import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import FormikError from './FormikError'

const File = ({ name, formik, className, placeholder, label }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className='text-xs mb-1 mt-3 font-medium text-gray-600'>{label}</label>
            <FastField>
                {({ form }) => (
                    <input
                        className={`${formik.touched[name] && formik.errors[name] ? "border-rose-600" : ""} ${className}`}
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
                )}
            </FastField>

            <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
                <ErrorMessage name={name} component={FormikError} />
            </div>
        </div>
    )
}

export default File
