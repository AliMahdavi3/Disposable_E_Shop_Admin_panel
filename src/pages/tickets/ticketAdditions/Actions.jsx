import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Actions = ({ rowData, setEditId, setAddTicketModal, handleDeleteTicket }) => {
  return (
    <>
      <button onClick={() => {
        setEditId(rowData._id);
        setAddTicketModal(true)
      }}>
        <FaEdit className='me-2 text-amber-500 hover:text-mgreen' />
      </button>

      <button onClick={() => handleDeleteTicket(rowData)} >
        <FaTrash className='text-rose-600 hover:text-mgreen' />
      </button>
    </>
  )
}

export default Actions
