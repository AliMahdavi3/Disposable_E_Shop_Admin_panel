import httpService from "./httpService";

export const getDiscountCodesService = () => {
    return httpService('/api/discounts', 'get');
}

export const createNewDiscountCodeService = (data) => {
    return httpService('/api/discount', 'post', data);
}

export const validateDiscountCodeService = (code) => {
    return httpService(`/api/discount/validate/${code}`, 'get');
}

export const getSingleDiscountCodeService = (discountId) => {
    return httpService(`/api/discount/${discountId}`, 'get');
}

export const applyDiscountCodeService = (data) => {
    return httpService('/api/apply-discount', 'post', data);
}

export const applyDiscountCodeToAllService = (data) => {
    return httpService('/api/apply-discount/all', 'post', data);
}

export const applyDiscountCodeToSpecificService = (data) => {
    return httpService('/api/apply-discount/specific', 'post', data);
}

export const editDiscountCodeService = (discountId, data) => {
    return httpService(`/api/discount/${discountId}`, 'put', data);
}

export const deleteDiscountCodeService = (discountId) => {
    return httpService(`/api/discount/${discountId}`, 'delete');
}

