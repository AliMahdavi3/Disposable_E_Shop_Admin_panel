import React from 'react'
import { FaTrash } from 'react-icons/fa'

const CommentActions = ({rowData, handleDeleteArticleComments}) => {
  return (
    <div>
      <button onClick={() => handleDeleteArticleComments(rowData)} >
        <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
      </button>
    </div>
  )
}

export default CommentActions
