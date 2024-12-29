import httpService from "./httpService";


export const getArticleCommentsService = (articleId) => {
    return httpService(`/api/articles/${articleId}/comments`, 'get');
}

export const getProductCommentsService = (productId) => {
    return httpService(`/api/products/${productId}/comments`, 'get');
}

export const deleteArticleCommentService = (articleId, commentId) => {
    return httpService(`/api/articles/${articleId}/comments/${commentId}`, 'delete');
}

export const deleteProductCommentService = (productId, commentId) => {
    return httpService(`/api/products/${productId}/comments/${commentId}`, 'delete');
}

