import React from 'react'
import { createPortal } from 'react-dom';
import { IoMdClose } from "react-icons/io";

const ModalContainer = ({ open, onClose, children, fullscreen }) => {
  return createPortal(
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
      z_index ${open ? "visible bg-black bg-opacity-30" : "invisible"}`}>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white overflow-y-auto shadow-md p-6 transition-all 
        ${fullscreen ? 'w-full h-screen' : 'rounded-xl'}
        ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>

        <button
          onClick={onClose}
          className='absolute top-2 left-2 p-1 rounded-lg text-gray-100
            bg-rose-500 hover:bg-gray-50 hover:text-gray-600 cursor-pointer'>
          <IoMdClose />
        </button>

        {children}
      </div>
    </div>,
    document.getElementById('modals-root'),
  )
}

export default ModalContainer
