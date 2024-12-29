import React from 'react'
import DiscountTable from './DiscountTable'

const Discount = () => {
  return (
    <div>
      <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
      text-center text-sm md:text-lg text-gray-500'>مدیریت کد ها تخفیف</h1>
      <DiscountTable />
    </div>
  )
}

export default Discount
