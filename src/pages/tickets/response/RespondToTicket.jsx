import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleTicketService } from '../../../services/ticket';
import UserInfo from './UserInfo';
import TicketContent from './TicketContent';
import TicketForm from './TicketForm';

const RespondToTicket = () => {
    const { ticketId } = useParams();
    const [ticket, setTicket] = useState(null);
    const [forceRender, setForceRender] = useState(0);

    useEffect(() => {
        const handleFetchTicket = async () => {
            try {
                const res = await getSingleTicketService(ticketId);
                if (res.status === 200) {
                    setTicket(res.data.ticket);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        handleFetchTicket();
    }, [ticketId, forceRender]);


    return (
        <div className='container py-5'>
            {
                ticket ? (
                    <>
                        <UserInfo ticket={ticket} />
                        <TicketContent ticket={ticket} />
                        <TicketForm
                            setForceRender={setForceRender}
                            ticketId={ticketId}
                            setTicket={setTicket}
                        />
                    </>
                ) : (
                    <div className='text-center text-gray-500 dark:text-darkModeTextColor'>
                        <p>هنوز تیکتی ایجاد نشده است!</p>
                    </div>
                )
            }

        </div >
    )
}

export default RespondToTicket
