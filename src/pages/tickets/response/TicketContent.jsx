import React, { useEffect, useRef } from 'react'

const TicketContent = ({ ticket }) => {
    const responsesContainerRef = useRef(null);

    useEffect(() => {
        if (responsesContainerRef.current && ticket?.responses) {
            responsesContainerRef.current.scrollTo({
                top: responsesContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [ticket?.responses]);

    return (
        <div ref={responsesContainerRef} className='overflow-y-auto max-h-[40vh]'>
            <div className='px-2 py-5 text-xs border-b-2 border-gray-300'>
                <div className='text-gray-500 dark:text-darkModeTextColor mb-2'>
                    <span className='text-amber-400'>موضوع : </span>
                    <span>{ticket.subject}</span>
                </div>
                <div className='text-gray-500 dark:text-darkModeTextColor mb-2'>
                    <span className='text-amber-400'>توضیحات : </span>
                    <span>{ticket.description}</span>
                </div>
            </div>

            {ticket.responses.length > 0 ? (
                ticket.responses.map((response, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 
                        py-2 text-gray-500 text-xs"
                    >
                        <p className='mb-2 text-gray-500 dark:text-darkModeTextColor'>
                            <span className="text-amber-500">شناسه گفتگو : </span>
                            {response.responderId}
                        </p>
                        <p className='mb-2 text-gray-500 dark:text-darkModeTextColor'>
                            <span className="text-amber-500">فرستنده : </span>
                            {
                                response.responderRole === "Admin" ? (
                                    <span>مدیر وبسایت</span>
                                ) : (
                                    <span>کاربر</span>
                                )
                            }
                        </p>
                        <p className='mb-2 text-gray-500 dark:text-darkModeTextColor'>
                            <span className="text-amber-500">پیام : </span>
                            {response.responseMessage}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-xs text-center text-gray-500
                    pt-3 dark:text-darkModeTextColor">
                    هنوز پاسخی ثبت نشده است.
                </p>
            )}
        </div>
    )
}

export default TicketContent
