import React from 'react'
import CommentTable from './CommentTable'

const ProductComments = () => {
    return (
        <div>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center md:text-lg text-gray-500'>مدیریت نظرات محصولات</h1>
            <CommentTable />
        </div>
    )
}

export default ProductComments
