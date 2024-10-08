import React from 'react'
import ProductTable from './ProductTable';

const Product = () => {
  return (
    <div className='w-full'>
      <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
       text-center md:text-lg text-gray-500'>مدیریت محصولات</h1>
      <ProductTable />
    </div>
  )
}

export default Product
