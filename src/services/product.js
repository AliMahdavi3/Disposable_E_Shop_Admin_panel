import httpService from "./httpService";

const createFormData = (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    if (data.image && data.image.length > 0) {
        data.image.forEach(file => {
            formData.append('image', file);
        });
    }
    formData.append('price', data.price);
    formData.append('productCode', data.productCode);
    formData.append('weight', data.weight);
    formData.append('size', data.size);
    formData.append('available', data.available);
    formData.append('category', data.category);
    formData.append('color', data.color);
    formData.append('tag', data.tag);
    formData.append('rating', data.rating);
    return formData;
}

export const getProductsService = () => {
    return httpService('/api/products', 'get');
}

export const getSingleProductService = (productId) => {
    return httpService(`/api/products/${productId}`, 'get');
}


export const createNewProductService = (data) => {
    const formData = createFormData(data);
    return httpService('/api/product', 'post', formData, 'multipart/form-data');
}

export const editProductService = (productId, data) => {
    const formData = createFormData(data);
    return httpService(`/api/products/${productId}`, 'put', formData, 'multipart/form-data');
}

export const deleteProductService = (productId) => {
    return httpService(`/api/products/${productId}`, 'delete');
}