import httpService from "./httpService";

const createFormData = (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.image) {
        formData.append('image', data.image);
    }
    return formData;
}

export const getSlidesService = () => {
    return httpService('/api/mainSliders', 'get');
}

export const getSingleSlideService = (slideId) => {
    return httpService(`/api/mainSliders/${slideId}`, 'get');
}

export const createNewSlideService = (data) => {
    const formData = createFormData(data);
    return httpService('/api/mainSlider', 'post', formData, 'multipart/form-data');
}

export const editSlideService = (slideId, data) => {
    const formData = createFormData(data);
    return httpService(`/api/mainSliders/${slideId}`, 'put', formData, 'multipart/form-data');
}

export const deleteSlideService = (slideId) => {
    return httpService(`/api/mainSliders/${slideId}`, 'delete');
}