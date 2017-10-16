import {
    getComments,
    saveComment,
    updateComment,
    deleteComment,
    voteComment,
} from '../api';

export const SORT_COMMENTS = 'SORT_COMMENTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const TOGGLE_COMMENT_DIALOG = 'TOGGLE_COMMENT_DIALOG';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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

export const addComment = (comment) => (
    {
        type: ADD_COMMENT,
        comment,
    }
)

export const editComment = (comment) => (
    {
        type: EDIT_COMMENT,
        comment,
    }
)

export const removeComment = (comment) => (
    {
        type: DELETE_COMMENT,
        comment,
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
        .then(savedComment => dispatch(addComment(savedComment)))
    )
}

export const startUpdateComment = (commentID, timestamp, body) => {
    return (dispatch, getState) => (
        updateComment(commentID, timestamp, body)
        .then(updatedComment => dispatch(editComment(updatedComment)))
    )
}

export const startDeleteComment = (commentID) => {
    return (dispatch, getState) => (
        deleteComment(commentID)
        .then(deletedComment => dispatch(removeComment(deletedComment)))
    )
}

export const startVoteComment = (commentID, option) => {
    return (dispatch, getState) => (
        voteComment(commentID, option)
        .then(updatedComment => dispatch(editComment(updatedComment)))
    )
}