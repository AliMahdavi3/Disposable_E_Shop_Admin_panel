import { ErrorMessage, FastField } from 'formik'
import React from 'react'
import FormikError from './FormikError'

const Select = ({ options, name, className, label, formik, placeholder }) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={name} className='text-xs mb-1 mt-3 font-medium text-gray-600'>{label}</label>
      <FastField as="select" placeholder={placeholder} name={name} id={name}
        className={`${formik.touched[name] && formik.errors[name] ?
          "shadow-sm shadow-rose-600" : null}
        ${className}`}>
        <option value="">انتخاب {placeholder} ...</option>
        {
          options.map((o) => (
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
