import React from 'react'
import { FaCartArrowDown, FaDollarSign, FaMoneyCheckAlt, FaProductHunt } from 'react-icons/fa'

const Cards = () => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className="col-span-4 md:col-span-1 transition duration-150 flex flex-col justify-center px-5
            md:hover:bg-sky-700 cursor-pointer text-mgreen hover:text-white border-2 border-mgreen dark:bg-darkModeBgColor 
            dark:text-darkModeTextColor box_shadow rounded-xl h-32 w-full">
                <p className='mb-5 text-sm lg:text-base font-medium'>تعداد کل محصولات</p>
                <div className='flex justify-between items-center'>
                    <p className='font-medium flex justify-center items-center'>
                        <span className='text-xl lg:text-3xl'>123,456</span>
                        <span className='ms-2'>عدد</span>
                    </p>
                    <FaProductHunt className='text-3xl lg:text-5xl dark:text-darkModeTextColor' />
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 transition duration-150 flex flex-col justify-center px-5
            md:hover:bg-amber-500 cursor-pointer text-mgreen hover:text-white border-2 border-amber-400 dark:bg-darkModeBgColor 
            dark:text-darkModeTextColor box_shadow rounded-xl h-32 w-full">
                <p className='mb-5 text-sm lg:text-base font-medium'>تعداد کل سفارشات</p>
                <div className='flex justify-between items-center'>
                    <p className='font-medium flex justify-center items-center'>
                        <span className='text-xl lg:text-3xl'>123,456</span>
                        <span className='ms-2'>عدد</span>
                    </p>
                    <FaCartArrowDown className='text-3xl lg:text-5xl dark:text-darkModeTextColor' />
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 transition duration-150 flex flex-col justify-center px-5
            md:hover:bg-teal-600 cursor-pointer text-mgreen hover:text-white border-2 border-teal-500 dark:bg-darkModeBgColor 
            dark:text-darkModeTextColor box_shadow rounded-xl h-32 w-full">
                <p className='mb-5 text-sm lg:text-base font-medium'>جمع کل فروش در هفته</p>
                <div className='flex justify-between items-center'>
                    <p className='font-medium flex justify-center items-center'>
                        <span className='text-xl lg:text-3xl'>123,456</span>
                        <span className='ms-2'>تومان</span>
                    </p>
                    <FaMoneyCheckAlt className='text-3xl lg:text-5xl dark:text-darkModeTextColor' />
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 transition duration-150 flex flex-col justify-center px-5
            md:hover:bg-rose-500 cursor-pointer text-mgreen hover:text-white border-2 border-rose-400 dark:bg-darkModeBgColor 
            dark:text-darkModeTextColor box_shadow rounded-xl h-32 w-full">
                <p className='mb-5 text-sm lg:text-base font-medium'>جمع کل فروش در ماه</p>
                <div className='flex justify-between items-center'>
                    <p className='font-medium flex justify-center items-center'>
                        <span className='text-xl lg:text-3xl'>123,456</span>
                        <span className='ms-2'>تومان</span>
                    </p>
                    <FaDollarSign className='text-3xl lg:text-5xl dark:text-darkModeTextColor' />
                </div>
            </div>
        </div>
    )
}

export default Cards
