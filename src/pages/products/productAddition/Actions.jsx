import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const Actions = ({rowData}) => {
    return (
        <>
            <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
            <FaEdit className='text-amber-500 hover:text-mgreen' />
        </>
    )
}

export default Actions
