import React from 'react'
import { apiPath } from '../../../services/httpService'

const ArticleImages = ({ rowData }) => {
    const { author } = rowData; // Destructure author from rowData

    return (
        author && author.profileImage ? ( // Check if author and profileImage exist
            <div className='py-2 -me-5'>
                <img
                    src={apiPath + '/' + author.profileImage} // Use author's profileImage
                    alt="authorProfileImage"
                    className="object-center rounded-full w-12 h-12 border-2 border-mgreen object-contain"
                />
            </div>
        ) : null // Return null if no profile image
    )
}

export default ArticleImages
