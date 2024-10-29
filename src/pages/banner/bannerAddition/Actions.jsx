import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Actions = ({handleDeleteBanner, rowData, setEditId, setAddBannerModal}) => {
  return (
    <>
      <button onClick={() => handleDeleteBanner(rowData)} >
        <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
      </button>

      <button onClick={() => {
        setEditId(rowData._id);
        setAddBannerModal(true)
      }}>
        <FaEdit className='text-amber-500 hover:text-mgreen' />
      </button>
    </>
  )
}

export default Actions
