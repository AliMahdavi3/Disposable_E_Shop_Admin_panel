import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import FormikError from './FormikError'

const Select = ({ options, name, className, label, formik, placeholder }) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={name} className='text-xs mb-1 mt-3 font-medium text-gray-600'>{label}</label>
      <FastField as="select" placeholder={placeholder} name={name} id={name}
        className={`shadow-sm bg-blue-100 ${formik.touched[name] && formik.errors[name] ?
          "shadow-rose-600" : 'shadow-gray-700'}
        ${className}`}>
        <option value="">انتخاب {placeholder} ...</option>
        {
          options?.map((o) => (
            <option key={o.id} value={o.value}>{o.value}</option>
          ))
        }
      </FastField>
      <div className='text-xs font-medium text-rose-600 ps-1 mt-2'>
        <ErrorMessage name={name} component={FormikError} />
      </div>
    </div>
  )
}

export default Select
