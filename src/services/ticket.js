import httpService from "./httpService";

const createFormData = (data) => {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('subject', data.subject);
    formData.append('description', data.description);
    if (data.image && data.image.length > 0) {
        data.image.forEach(file => {
            formData.append('image', file);
        });
    }
    return formData;
}

export const postNewTicketService = (data) => {
    const formData = createFormData(data);
    return httpService('/api/ticket', 'post', formData, 'multipart/form-data');
}

export const getAllTicketsService = () => {
    return httpService('/api/all-tickets', 'get');
}

export const getSingleTicketService = (ticketId) => {
    return httpService(`/api/tickets/${ticketId}`, 'get');
}

export const editTicketService = (ticketId, data) => {
    const formData = createFormData(data);
    return httpService(`/api/tickets/${ticketId}`, 'put', formData, 'multipart/form-data');
}

export const deleteTicketService = (ticketId) => {
    return httpService(`/api/tickets/${ticketId}`, 'delete');
}

// router.post('/ticket', authenticate, upload.array('image', 5), ticketsControllers.createTicket);
// router.get('/user-tickets', authenticate, ticketsControllers.getAllTicketsForEachUser);
// router.get('/all-tickets', authenticate, ticketsControllers.getAllTickets);
// router.post('/tickets/:ticketId/respond', authenticate, ticketsControllers.respondToTicket);
// router.get('/tickets/:ticketId', authenticate, ticketsControllers.getSingleTicket);
// router.put('/tickets/:ticketId', authenticate, upload.array('image', 5), ticketsControllers.updateTicket);
// router.delete('/tickets/:ticketId', authenticate, ticketsControllers.deleteTicket);
