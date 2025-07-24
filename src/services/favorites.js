import httpService from "./httpService"

export const adminGetUserFavoritesService = (userId) => {
    return httpService(`/api/admin/${userId}/favorites`, 'get');
}

export const adminRemoveFromFavoriteListService = (userId, productId) => {
    return httpService(`/api/admin/${userId}/favorites/${productId}`, 'delete');
}