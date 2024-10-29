import httpService from "./httpService"

const createFormData = (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.image) {
        formData.append('image', data.image);
    }
    formData.append('link', data.link);
    return formData;
}

export const getBannersService = () => {
    return httpService('/api/banners', 'get');
}

export const getSingleBannerService = (bannerId) => {
    return httpService(`/api/banners/${bannerId}`, 'get');
}

export const createNewBannerService = (data) => {
    const formData = createFormData(data);
    return httpService('/api/banner', 'post', formData, 'multipart/form-data');
}

export const editBannerService = (bannerId, data) => {
    const formData = createFormData(data);
    return httpService(`/api/banners/${bannerId}`, 'put', formData, 'multipart/form-data');
}

export const deleteBannerService = (bannerId) => {
    return httpService(`/api/banners/${bannerId}`, 'delete');
}