import httpService from "./httpService";

export const getQuestionsService = () => {
    return httpService('/api/questions', 'get');
}

export const getSingleQuestionService = (questionId) => {
    return httpService(`/api/questions/${questionId}`, 'get');
}


export const createNewQuestionService = (data) => {
    return httpService('/api/question', 'post', data);
}

export const editQuestionService = (questionId, data) => {
    return httpService(`/api/questions/${questionId}`, 'put', data);
}

export const deleteQuestionService = (questionId) => {
    return httpService(`/api/questions/${questionId}`, 'delete');
}
