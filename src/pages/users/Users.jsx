import React from 'react'
import UserTable from './UserTable'

const Users = () => {
    return (
        <div className='w-full'>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center md:text-lg text-gray-500'>مدیریت کاربران</h1>
            <UserTable />
        </div>
    )
}

export default Users
