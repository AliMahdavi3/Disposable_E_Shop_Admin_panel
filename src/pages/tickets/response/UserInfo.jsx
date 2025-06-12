import React from 'react'

const UserInfo = ({ ticket }) => {
    return (
        <div className='flex justify-between items-center flex-col md:flex-row
            pb-3 border-b-2 border-gray-300 text-xs'>
            <div className='text-gray-500 dark:text-darkModeTextColor mb-1'>
                <span className='text-amber-400'>نام کاربر : </span>
                <span>{ticket.name}</span>
            </div>
            <div className='text-gray-500 dark:text-darkModeTextColor mb-1'>
                <span className='text-amber-400'>ایمیل کاربر : </span>
                <span>{ticket.email}</span>
            </div>
            <div className='text-gray-500 dark:text-darkModeTextColor mb-1'>
                <span className='text-amber-400'>تلفن کاربر : </span>
                <span>{ticket.phone}</span>
            </div>
        </div>
    )
}

export default UserInfo
