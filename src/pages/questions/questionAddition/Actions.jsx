import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Actions = ({setEditId, setAddQuestionModal, handleDeleteQuestion, rowData}) => {
  return (
    <>
    <button onClick={() => handleDeleteQuestion(rowData)} >
        <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
    </button>

    <button onClick={() => {
        setEditId(rowData._id);
        setAddQuestionModal(true)
    }}>
        <FaEdit className='text-amber-500 hover:text-mgreen' />
    </button>
</>
  )
}

export default Actions
