import React from 'react'
import { createPortal } from 'react-dom';
import { FaTimesCircle } from "react-icons/fa";

const ModalContainer = ({ open, onClose, children, fullscreen, title }) => {

  return createPortal(
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
      z_index ${open ? "visible bg-black bg-opacity-30" : "invisible"}`}>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white opacity-95 dark:bg-darkModeBgColor overflow-y-auto shadow-md py-6 transition-all 
        ${fullscreen ? 'w-full h-screen' : 'rounded-xl'}
        ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>


        <div className='container pb-5 flex justify-between items-center'>
          <h2 className='text-lg text-gray-500'>{title}</h2>
          <button onClick={onClose} className='rounded-lg p-1 text-gray-100 bg-rose-500 cursor-pointer'>
            <FaTimesCircle />
          </button>
        </div>

        {children}

      </div>
    </div>,
    document.getElementById('modals-root'),
  )
}

export default ModalContainer
