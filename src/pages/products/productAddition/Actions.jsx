import { FaEdit, FaTrash, FaCommentDots } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


const Actions = ({ rowData, setAddProductModal, setEditId, handleDeleteProduct }) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate(`/product/${rowData._id}`)}>
                <FaCommentDots className='text-blue-500 dark:text-emerald-600 me-2 text-lg hover:text-mgreen' />
            </button>

            <button onClick={() => {
                setEditId(rowData._id);
                setAddProductModal(true)
            }}>
                <FaEdit className='me-2 text-amber-500 hover:text-mgreen' />
            </button>

            <button onClick={() => handleDeleteProduct(rowData)} >
                <FaTrash className='text-rose-600 hover:text-mgreen' />
            </button>
        </>
    )
}

export default Actions
