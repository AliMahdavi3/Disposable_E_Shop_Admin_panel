import React from 'react'
import { FastField } from 'formik'

const TicketInput = ({ name, label, type, placeholder, readOnly }) => {
    return (
        <div className={`flex flex-col w-full`}>

            <label
                htmlFor={name}
                className={`ms-2 mb-1 text-xs font-medium text-gray-400`}
            >
                {label}
            </label>

            <FastField
                type={type}
                placeholder={placeholder}
                name={name}
                readOnly={readOnly}
                className={`${readOnly ? "text-gray-500" : "text-gray-700"}
                placeholder:italic placeholder:text-xs placeholder:px-1
                w-full py-2 px-5 mb-3 rounded-full bg-blue-600 bg-opacity-25`}
            />

        </div>
    )
}

export default TicketInput
