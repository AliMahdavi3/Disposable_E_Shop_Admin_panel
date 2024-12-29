import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnButton = () => {
    const navigate = useNavigate();

    const handleReturnButton = () => {
        navigate(-1);
    }
    return (
        <button onClick={handleReturnButton} 
        className='bg-amber-600 dark:bg-darkModeBgColor text-white dark:text-darkModeTextColor
        hover:bg-violet-600 dark:hover:bg-violet-600 cursor-pointer p-2 rounded-md'>
            <span className='text-sm '>بازگشت</span>
        </button>
    )
}

export default ReturnButton
