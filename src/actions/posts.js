import {
    getPosts,
    savePost,
    updatePost,
    deletePost,
    votePost,
} from '../api';

export const POSTS_SORT = 'POSTS_SORT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const TOGGLE_POST_DIALOG = 'TOGGLE_POST_DIALOG';

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

export const startFetchPosts = () => {
    return dispatch => (
        getPosts().then(posts => dispatch(fetchPosts(posts.filter(post => post.deleted === false))))
    )
}

export const startAddPost = (post) => {
    return (dispatch, getState) => (
        savePost(post)
        .then(post => {
            const posts = [ ...getState().posts.posts, post ];
            dispatch(fetchPosts(posts));
        })
    )
}

export const startUpdatePost = (postID, title, body) => {
    return (dispatch, getState) => (
        updatePost(postID, title, body)
        .then(post => {
            const posts = getState().posts.posts.map(statePost => statePost.id === post.id ? post : statePost);
            dispatch(fetchPosts(posts));
        })
    )
}

export const startDeletePost = (postID) => {
    return (dispatch, getState) => (
        deletePost(postID)
        .then(post => {
            const posts = getState().posts.posts.filter(({id}) => id !== postID);
            dispatch(fetchPosts(posts));
        })
    )
}

export const startVotePost = (postID, option) => {
    return (dispatch, getState) => (
        votePost(postID, option)
        .then(post => {
            const posts = getState().posts.posts.map(statePost => statePost.id === post.id ? post : statePost);
            dispatch(fetchPosts(posts));
        })
    )
}