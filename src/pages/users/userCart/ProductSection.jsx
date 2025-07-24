import React from 'react'
import { apiPath } from '../../../services/httpService'
import { convertDateToJalali } from '../../../utils/convertDate'
import { FaTrash } from 'react-icons/fa'

const ProductSection = ({ cartData, handleDeleteItemFromCart }) => {
    return (
        <div className="col-span-5 lg:col-span-3 border-t-2 border-gray-300 
            rounded-md p-2 mb-5 overflow-y-auto h-[70vh]">
            <ul className='grid grid-cols-2 gap-2'>
                {Array.isArray(cartData.cart) && cartData.cart.length > 0 ? (
                    cartData.cart?.map((item, index) => (
                        <div
                            key={index}
                            className='col-span-2 md:col-span-1 flex justify-between 
                            items-center mt-1 rounded-md border-2 border-gray-300
                            dark:bg-darkModeBgColor py-2 px-2'
                        >
                            <img
                                className='w-[15%] md:w-[10%] rounded-lg border-2'
                                src={`${apiPath}/${item.product.imageUrl[0]}`}
                                alt=""
                            />
                            <span className="text-gray-500 dark:text-darkModeTextColor 
                                font-medium text-xs">
                                {item.product.title}
                            </span>
                            <p className='text-xs font-medium text-gray-500
                                dark:text-darkModeTextColor'>
                                {item.product.price}
                            </p>

                            <p className='md:ms-5 text-center font-medium
                                text-gray-500 dark:text-darkModeTextColor text-xs'>
                                {item.quantity}
                            </p>
                            <div className='md:me-3 flex items-center'>
                                <FaTrash
                                    onClick={() => handleDeleteItemFromCart(item.product._id)}
                                    className='text-red-600 cursor-pointer'
                                />
                            </div>
                            <p className='flex flex-col justify-center items-center
                                text-gray-500 dark:text-darkModeTextColor text-xs'>
                                <span>{convertDateToJalali(item.dateAdded)} : A</span>
                                <span>{convertDateToJalali(item.updatedDate)} : U</span>
                            </p>
                        </div>
                    ))
                ) :
                    (
                        <div className='col-span-2 my-10 flex flex-col 
                            justify-center items-center'>
                            <img
                                className='w-[50%] md:w-[25%] border-4 rounded-full'
                                src="/assets/images/empty-cart.png"
                                alt=""
                            />
                            <h1 className='text-center pt-5 text-xs md:text-base font-medium
                                text-gray-400'>
                                هنوز محصولی به این سبد اضافه نشده است!
                            </h1>
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default ProductSection
