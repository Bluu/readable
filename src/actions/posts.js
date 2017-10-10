import {
    getPosts,
    savePost,
    updatePost,
    deletePost,
    votePost,
} from '../api'

export const POSTS_SORT_BY = 'POSTS_SORT_BY'
export const POSTS_SORT_ORDER = 'POSTS_SORT_ORDER'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const postsSortBy = (sortBy) => (
    {
        type: POSTS_SORT_BY,
        sortBy
    }
)

export const postsSortOrder = () => (
    {
        type: POSTS_SORT_ORDER,
    }
)

export const fetchPosts = (posts) => (
    {
        type: FETCH_POSTS,
        posts
    }
)

export const startFetchPosts = () => {
    return dispatch => (
        getPosts().then(posts => dispatch(fetchPosts(posts)))
    )
}

export const startAddPost = (post) => {
    return (dispatch, getState) => (
        savePost(post)
        .then(post => {
            const posts = [ ...getState().posts, post ]
            dispatch(fetchPosts(posts))
        })
    )
}

export const startUpdatePost = (postID, title, body) => {
    return (dispatch, getState) => (
        updatePost(postID, title, body)
        .then(post => {
            const posts = getState().posts.posts.map(statePost => statePost.id === post.id ? post : statePost)
            dispatch(fetchPosts(posts))
        })
    )
}

export const startDeletePost = (postID) => {
    return (dispatch, getState) => (
        deletePost(postID)
        .then(post => {
            const posts = getState().posts.posts.filter(({id}) => id !== post.id)
            dispatch(fetchPosts(posts))
        })
    )
}

export const startVotePost = (postID, option) => {
    return (dispatch, getState) => (
        votePost(postID, option)
        .then(post => {
            const posts = getState().posts.posts.map(statePost => statePost.id === post.id ? post : statePost)
            dispatch(fetchPosts(posts))
        })
    )
}

// export const search = (query, maxResults) =>
// fetch(`${api}/search`, {
//   method: 'POST',
//   headers: {
//     ...headers,
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ query, maxResults })
// }).then(res => res.json())
//   .then(data => data.books)