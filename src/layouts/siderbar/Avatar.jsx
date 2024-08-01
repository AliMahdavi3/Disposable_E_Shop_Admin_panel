import React from 'react'

const Avatar = ({name, imageUrl, active}) => {
    return (
        <div className='pb-5 my-5 flex flex-col justify-center items-center'>
            <div className={`${active ? "w-[70%]" : "w-[30%]"}`}>
                <img className='border-4 rounded-full' src={imageUrl} alt="" />
            </div>
            <div className={`text-sm text-gray-700 mt-2 text-center
                ${active ? 'hidden' : 'block'}`}>
                <p className='text-yellow-500'>{name}</p>
                <p className='text-xs'>مدیر وبسایت</p>
            </div>
        </div>
    )
}

export default Avatar
