import React from 'react'

const UserRole = ({ rowData }) => {
    return (
        <p className={`text-xs font-medium text-white py-2 px-3 rounded-full 
            ${rowData.role !== 'Admin' ? 'bg-teal-600' : 'bg-violet-500'}`}>
            {rowData.role === 'Admin' ? 'ادمین' : 'مشتری'}
        </p>
    )
}

export default UserRole
