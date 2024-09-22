import React from 'react'

const AvailableProduct = ({ rowData }) => {
    return (
        <p className={`text-xs font-medium text-white py-2 px-3 rounded-full 
            ${rowData.available ? 'bg-teal-600' : 'bg-rose-500'}`}>
            {rowData.available === true ? 'موجود' : 'ناموجود'}
        </p>
    )
}

export default AvailableProduct
