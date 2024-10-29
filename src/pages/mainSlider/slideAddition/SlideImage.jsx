import React from 'react'
import { apiPath } from '../../../services/httpService'

const SlideImage = ({rowData}) => {
    return (
        rowData.imageUrl && rowData.imageUrl ? (
            <div className='py-1 -ps-8'>
                <img src={apiPath + '/' + rowData.imageUrl} alt="slideImage"
                    className="object-center rounded-full w-16 h-16 border-2 border-mgreen object-contain" />
            </div>
        ) : null
    )
}

export default SlideImage
