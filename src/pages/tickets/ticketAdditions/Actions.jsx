import React from 'react'
import { FaCommentAlt, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Actions = ({ rowData, setEditId, setAddTicketModal, handleDeleteTicket }) => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(`/tickets/${rowData._id}`)}>
        <FaCommentAlt className='text-blue-500 dark:text-emerald-600 me-2 
        text-lg hover:text-mgreen' />
      </button>

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
