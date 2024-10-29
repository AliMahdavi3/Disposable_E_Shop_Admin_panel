import React from 'react'
import QuestionTable from './QuestionTable'

const Questions = () => {
    return (
        <div className='w-full'>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center md:text-lg text-gray-500'>مدیریت سوالات</h1>
            <QuestionTable/>
        </div>
    )
}

export default Questions
