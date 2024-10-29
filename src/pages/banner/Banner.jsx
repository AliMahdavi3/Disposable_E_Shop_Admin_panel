import React from 'react'
import BannerTable from './BannerTable'

const Banner = () => {
    return (
        <div>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center text-sm md:text-lg text-gray-500'>مدیریت بنر های تبلیغاتی</h1>
            <BannerTable/>
        </div>
    )
}

export default Banner
