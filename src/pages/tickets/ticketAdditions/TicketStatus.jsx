import React from 'react'

const TicketStatus = ({ rowData }) => {
    return (
        <p className='text-xs text-white'>
            {
                rowData?.ticketStatus === 'Open' ? (
                    <span className='bg-violet-400 py-1 px-2 rounded-full'>
                        درجریان
                    </span>
                ) : (
                    <span className='bg-sky-500 py-1 px-2 rounded-full'>
                        بسته شده
                    </span>
                )
            }
        </p>
    )
}

export default TicketStatus
