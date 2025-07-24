import httpService from "./httpService";

export const getUserCartItemsService = (userId = null) => {
    const endpoint = userId ? `/api/cart/${userId}` : '/api/cart';
    return httpService(endpoint, 'get');
};

export const adminDeleteItemsFromCartsService = (userId, productId) => {
    return httpService(`/api/admin/cart/${userId}/${productId}`, 'delete');
};