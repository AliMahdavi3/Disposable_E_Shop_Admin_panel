import React from 'react'

const ProductImages = ({ rowData }) => {
    const baseUrl = "http://localhost:4000/";
    return (
        rowData.imageUrl && rowData.imageUrl ? (
            <div className='py-2 -me-5'>
                <img src={baseUrl + rowData.imageUrl[0]} alt="productImage"
                    className="object-center rounded-full w-12 h-12 border-2 border-mgreen object-contain" />
            </div>
        ) : null
    )
}

export default ProductImages
