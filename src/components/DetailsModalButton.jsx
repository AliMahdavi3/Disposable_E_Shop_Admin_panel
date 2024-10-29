import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';

const DetailsModalButton = ({ rowData, setDetailsModal, setReInitialValues }) => {
    return (
        <button
            onClick={() => {
                setDetailsModal(true);
                setReInitialValues(rowData);
            }}
            className='py-2 -me-3 hover:bg-violet-500 cursor-pointer bg-orange-400
            rounded-full text-gray-200 px-2 flex justify-center items-center
            text-xs text-blue-gray-900 font-medium'
        >
            <span>بیشتر</span>
            <FaArrowLeft />
        </button>
    )
}

export default DetailsModalButton
