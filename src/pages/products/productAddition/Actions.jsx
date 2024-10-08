import { FaEdit, FaTrash } from 'react-icons/fa'

const Actions = ({ rowData, setAddProductModal, setEditId, handleDeleteProduct }) => {

    return (
        <>
            <button onClick={() => handleDeleteProduct(rowData)} >
                <FaTrash className='me-2 text-rose-600 hover:text-mgreen' />
            </button>

            <button onClick={() => {
                setEditId(rowData._id);
                setAddProductModal(true)
            }}>
                <FaEdit className='text-amber-500 hover:text-mgreen' />
            </button>
        </>
    )
}

export default Actions
