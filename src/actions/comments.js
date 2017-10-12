import {
    getComments,
    voteComment,
} from '../api';

export const SORT_COMMENTS = 'SORT_COMMENTS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const commentsSort = (sort) => (
    {
        type: SORT_COMMENTS,
        sort
    }
)

export const fetchComments = (comments) => (
    {
        type: FETCH_COMMENTS,
        comments
    }
)

export const startFetchComments = (postID) => {
    return dispatch => (
        getComments(postID).then(comments => dispatch(fetchComments(comments)))
    )
}

export const startVoteComment = (commentID, option) => {
    return (dispatch, getState) => (
        voteComment(commentID, option)
        .then(comment => {
            const comments = getState().comments.comments.map(stateComment => stateComment.id === comment.id ? comment : stateComment)
            dispatch(fetchComments(comments))
        })
    )
}