import React from 'react'
import { FaCommentDots, FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Actions = ({ rowData, handleDeleteArticle, setEditId, setAddArticleModal }) => {

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(`/blog/${rowData._id}`)}>
        <FaCommentDots className='text-blue-500 dark:text-emerald-600 me-2 text-lg hover:text-mgreen' />
      </button>

      <button onClick={() => {
        setEditId(rowData._id);
        setAddArticleModal(true)
      }}>
        <FaEdit className='me-2 text-amber-500 hover:text-mgreen' />
      </button>

      <button onClick={() => handleDeleteArticle(rowData)} >
        <FaTrash className='text-rose-600 hover:text-mgreen' />
      </button>


    </>
  )
}

export default Actions
