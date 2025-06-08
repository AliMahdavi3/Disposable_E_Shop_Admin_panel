import React from 'react'
import { apiPath } from '../../../services/httpService'

const TicketImages = ({ rowData }) => {
    return (
        rowData.imageUrl && rowData.imageUrl.length > 0 ? (
            <div className='py-2 -me-5'>
                <img src={`${apiPath}/${rowData.imageUrl[0]}`} alt="ticketImage"
                    className="object-center rounded-full w-12 h-12 border-2 border-mgreen
                    object-contain"
                />
            </div>
        ) : (
            <div className='py-2 -me-5'>
                <img src='/assets/images/avatar.png' alt="ticketImage"
                    className="object-center rounded-full w-12 h-12 border-2 border-mgreen
                    object-contain"
                />
            </div>
        )
    )
}

export default TicketImages
