import React from 'react'
import { FaEdit, FaTrash, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Actions = ({ rowData, setAddUserModal, setEditId, handleDeleteUser }) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(`/users/${rowData._id}`)}>
                <FaUserCircle className='text-blue-500 dark:text-emerald-600 
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
