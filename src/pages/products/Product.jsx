import React, { useState } from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa';
import ProductTable from './ProductTable';
import AddProduct from './AddProduct';


const Product = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='w-full'>
      <h1 className='pt-2 md:pt-5 text-center md:text-xl'>مدیریت محصولات</h1>

      <div className='mt-3 md:mt-0 flex justify-between items-center'>
        <div className="relative text-gray-600 w-full">
          <input type="search" name="serch" placeholder="Search" className="bg-white shadow-lg h-10 px-2 md:px-5 pr-8 md:pr-10 rounded-full text-sm focus:outline-none" />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2 md:mr-4">
            <FaSearch className='h-4 w-4 fill-current text-gray-400' />
          </button>
        </div>
        <button onClick={()=>setOpen(true)} className='bg-teal-600 hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
          <FaPlus className='text-white text-2xl' />
        </button>
      </div>

      <ProductTable />

      <AddProduct open={open} onClose={() => setOpen(false)} />
        
    </div>
  )
}

export default Product
