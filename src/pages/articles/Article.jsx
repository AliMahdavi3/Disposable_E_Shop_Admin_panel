import React from 'react'
import ArticleTable from './ArticleTable'

const Article = () => {
    return (
        <div>
            <h1 className='pt-2 md:pt-5 dark:text-darkModeTextColor
            text-center md:text-lg text-gray-500'>مقالات</h1>
            <ArticleTable />
        </div>
    )
}

export default Article
