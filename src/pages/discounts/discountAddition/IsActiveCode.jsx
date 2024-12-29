import React from 'react'

const IsActiveCode = ({ rowData }) => {
    return (
        <div className='py-1 me-2'>
            <p className={`text-xs font-medium text-white py-2 px-3 rounded-full 
            ${rowData.isActive ? 'bg-teal-600' : 'bg-rose-500'}`}>
                {rowData.isActive === true ? 'فعال' : 'غیرفعال'}
            </p>
        </div>
    )
}

export default IsActiveCode
