const api = require('../libs/api');
const COMMENT_DB = 'http://localhost:8003/comments';
const getUrl = (path) => `${COMMENT_DB}${path}`;

const createComment = async (body) => {
    return await api.post(getUrl('/create'), body)
};

const deleteComment = async (id) => {
    return await api.post(getUrl(`/delete/${id}`), {})
};

const getCommentsByQID = async (id) => {
    return await api.get(getUrl(`/all/question/${id}`));
};

const getCommentByParams = async (body) => {
    return await api.post(getUrl('/get'), body);
};

const deleteCommentsByQuestionId = async (id) => {
    return await api.post(getUrl(`/delete/question/${id}`), {})
};

const deleteCommentsByUserId = async (id) => {
    return await api.post(getUrl(`/delete/user/${id}`), {})
};

module.exports = {
    createComment,
    deleteComment,
    getCommentByParams,
    getCommentsByQID,
    deleteCommentsByUserId,
    deleteCommentsByQuestionId
};

