import httpService from "./httpService";

export const getProductsService = () => {
    return httpService('/api/products', 'get');
}


export const createNewProductService = (data) => {
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
    // formData.append('available', data.available);
    formData.append('category', data.category);
    formData.append('color', data.color);
    formData.append('tag', data.tag);
    data = formData;

    return httpService('/api/product', 'post', data, 'multipart/form-data');
}