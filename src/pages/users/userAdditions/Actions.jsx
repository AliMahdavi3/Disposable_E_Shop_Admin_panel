import React from 'react'
import { FaEdit, FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Actions = ({ rowData, setAddUserModal, setEditId, handleDeleteUser }) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(`/cart/${rowData._id}`, { state: { userName: rowData.name } })}>
                <FaShoppingCart className='text-blue-500 dark:text-emerald-600 
                me-2 text-lg hover:text-mgreen' />
            </button>

            <button onClick={() => navigate(`/favorites/${rowData._id}`, { state: { userName: rowData.name } })}>
                <FaHeart className='text-pink-500 dark:text-violet-600 
                me-2 text-lg hover:text-mgreen' />
            </button>

            <button onClick={() => {
                setEditId(rowData._id);
                setAddUserModal(true)
            }}>
                <FaEdit className='me-2 text-amber-500 hover:text-mgreen' />
            </button>

            <button onClick={() => handleDeleteUser(rowData)} >
                <FaTrash className='text-rose-600 hover:text-mgreen' />
            </button>
        </>
    )
}

export default Actions
