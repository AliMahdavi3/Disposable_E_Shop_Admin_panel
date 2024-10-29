import httpService from "./httpService"

const createFormData = (data) => {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('excerpt', data.excerpt);
    formData.append('categories', data.categories);
    formData.append('readTime', data.readTime);
    formData.append('authorName', data.authorName);
    formData.append('authorBio', data.authorBio);
    
    // Append image file if it exists
    if (data.image) {
        formData.append('image', data.image);
    }
    // Append author profile image if it exists
    if (data.authorProfileImage) {
        formData.append('authorProfileImage', data.authorProfileImage);
    }

    return formData;
}

export const getArticleService = () => {
    return httpService('/api/articles', 'get');
}

export const getSingleArticleService = (articleId) => {
    return httpService(`/api/articles/${articleId}`, 'get');
}

export const createNewArticleService = (data) => {
    const formData = createFormData(data);
    return httpService('/api/article', 'post', formData, 'multipart/form-data');
}

export const editArticleService = (articleId, data) => {
    const formData = createFormData(data);
    return httpService(`/api/articles/${articleId}`, 'put', formData, 'multipart/form-data');
}

export const deleteArticleService = (articleId) => {
    return httpService(`/api/articles/${articleId}`, 'delete');
}