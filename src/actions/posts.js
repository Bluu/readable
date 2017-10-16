import {
    getPosts,
    savePost,
    updatePost,
    deletePost,
    votePost,
} from '../api';

export const POSTS_SORT = 'POSTS_SORT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const TOGGLE_POST_DIALOG = 'TOGGLE_POST_DIALOG';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const postsSort = (sort) => (
    {
        type: POSTS_SORT,
        sort,
    }
)

export const fetchPosts = (posts) => (
    {
        type: FETCH_POSTS,
        posts,
    }
)

export const togglePostDialog = (selectedPost = {}) => (
    {
        type: TOGGLE_POST_DIALOG,
        selectedPost,
    }
)

export const addPost = (post) => (
    {
        type: ADD_POST,
        post,
    }
)

export const editPost = (post) => (
    {
        type: EDIT_POST,
        post,
    }
)

export const removePost = (post) => (
    {
        type: DELETE_POST,
        post,
    }
)

export const startFetchPosts = () => {
    return dispatch => (
        getPosts().then(posts => dispatch(fetchPosts(posts.filter(post => post.deleted === false))))
    )
}

export const startAddPost = (post) => {
    return (dispatch, getState) => (
        savePost(post)
        .then(savedPost => dispatch(addPost(savedPost)))
    )
}

export const startUpdatePost = (postID, title, body) => {
    return (dispatch, getState) => (
        updatePost(postID, title, body)
        .then(updatedPost => dispatch(editPost(updatedPost)))
    )
}

export const startDeletePost = (postID) => {
    return (dispatch, getState) => (
        deletePost(postID)
        .then(deletedPost => dispatch(removePost(deletedPost)))
    )
}

export const startVotePost = (postID, option) => {
    return (dispatch, getState) => (
        votePost(postID, option)
        .then(updatedPost => dispatch(editPost(updatedPost)))
    )
}