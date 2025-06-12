import React from 'react'
import { apiPath } from '../../../services/httpService'

const BannerImage = ({ rowData }) => {
  return (
    rowData.imageUrl && rowData.imageUrl ? (
      <div className='py-1 -ps-8'>
        <img src={`${apiPath}/${rowData.imageUrl[0]}`} alt="bannerImage"
          className="object-center rounded-md w-16 h-16 border-2 border-mgreen object-contain" />
      </div>
    ) : null
  )
}

export default BannerImage
