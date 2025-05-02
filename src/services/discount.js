import httpService from "./httpService";

export const getDiscountCodesService = () => {
    return httpService('/api/discounts', 'get');
}

export const createNewDiscountCodeService = (data) => {
    return httpService('/api/discount', 'post', data);
}

export const getSingleDiscountCodeService = (discountId) => {
    return httpService(`/api/discount/${discountId}`, 'get');
}

export const editDiscountCodeService = (discountId, data) => {
    return httpService(`/api/discount/${discountId}`, 'put', data);
}

export const deleteDiscountCodeService = (discountId) => {
    return httpService(`/api/discount/${discountId}`, 'delete');
}

