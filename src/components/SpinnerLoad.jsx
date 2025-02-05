import React from 'react'

const SpinnerLoad = ({ isSmall }) => {
    return (
        <div className={`flex justify-center items-center ${isSmall ? '' : 'my-10'}`}>
            <div className={`relative ${isSmall ? 'w-5 h-5' : 'w-14 h-14'} animate-spin rounded-full 
                bg-gradient-to-r from-violet-500 via-mgreen to-rose-500`}>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 
                -translate-y-1/2 ${isSmall ? 'w-3 h-3' : 'w-10 h-10'}
                bg-gray-200 rounded-full border-2 border-white`}></div>
            </div>
        </div>
    )
}

export default SpinnerLoad
