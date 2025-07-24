import httpService from "./httpService";

export const registerService = (data) => {
    return httpService('/auth/register', 'post', data);
};

export const getAllUsersService = () => {
    return httpService('/auth/users', 'get');
};

export const getUsersCountService = () => {
    return httpService('/auth/user-count', 'get');
};

export const getSingleUserService = (userId = null) => {
    const endpoint = userId ? `/auth/user/${userId}` : '/auth/user';
    return httpService(endpoint, 'get');
};

export const updateUserInfoService = (userId, data) => {
    return httpService(`/auth/user/${userId}`, 'put', data);
};

export const deleteUserService = (userId) => {
    return httpService(`/auth/user/${userId}`, 'delete');
};