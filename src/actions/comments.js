import {
    getComments,
    saveComment,
    updateComment,
    deleteComment,
    voteComment,
} from '../api';

export const SORT_COMMENTS = 'SORT_COMMENTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const TOGGLE_COMMENT_DIALOG = 'TOGGLE_COMMENT_DIALOG';

export const commentsSort = (sort) => (
    {
        type: SORT_COMMENTS,
        sort,
    }
)

export const fetchComments = (comments) => (
    {
        type: FETCH_COMMENTS,
        comments,
    }
)

export const toggleCommentDialog = (selectedComment = {}) => (
    {
        type: TOGGLE_COMMENT_DIALOG,
        selectedComment,
    }
)

export const startFetchComments = (postID) => {
    return dispatch => (
        getComments(postID).then(comments => dispatch(fetchComments(comments)))
    )
}

export const startAddComment = (comment) => {
    return (dispatch, getState) => (
        saveComment(comment)
        .then(comment => {
            const comments = [ ...getState().comments.comments, comment ];
            dispatch(fetchComments(comments));
        })
    )
}

export const startUpdateComment = (commentID, timestamp, body) => {
    return (dispatch, getState) => (
        updateComment(commentID, timestamp, body)
        .then(comment => {
            const comments = getState().comments.comments.map(stateComment => stateComment.id === comment.id ? comment : stateComment);
            dispatch(fetchComments(comments));
        })
    )
}

export const startDeleteComment = (commentID) => {
    return (dispatch, getState) => (
        deleteComment(commentID)
        .then(comment => {
            const comments = getState().comments.comments.filter(({id}) => id !== comment.id);
            dispatch(fetchComments(comments));
        })
    )
}

export const startVoteComment = (commentID, option) => {
    return (dispatch, getState) => (
        voteComment(commentID, option)
        .then(comment => {
            const comments = getState().comments.comments.map(stateComment => stateComment.id === comment.id ? comment : stateComment);
            dispatch(fetchComments(comments));
        })
    )
}