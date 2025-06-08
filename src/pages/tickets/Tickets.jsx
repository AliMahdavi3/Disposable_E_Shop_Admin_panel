import React from 'react'
import TicketsTable from './TicketsTable'

const Tickets = () => {
    return (
        <div className='w-full'>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center md:text-lg text-gray-500'>مدیریت تیکت ها</h1>
            <TicketsTable />
        </div>
    )
}

export default Tickets
