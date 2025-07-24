import React, { useEffect, useState } from 'react'
import UserTable from './UserTable'
import { getUsersCountService } from '../../services/user';

const Users = () => {
    const [dataCount, setDataCount] = useState();
    useEffect(() => {
        const handleGetUsersCount = async () => {
            try {
                const res = await getUsersCountService();
                if (res.status === 200) {
                    setDataCount(res.data.userCount);
                }
            } catch (error) {
                console.log(error.message);
            };
        };
        handleGetUsersCount();
    }, []);


    return (
        <div className='w-full'>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center md:text-lg text-gray-500'>
                مدیریت کاربران : {dataCount}
            </h1>
            <UserTable />
        </div>
    )
}

export default Users
