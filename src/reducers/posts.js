import {
    POSTS_SORT,
    FETCH_POSTS,
} from '../actions/posts'

const initialState = {
    posts: [],
    sort: {
        by: 'voteScore',
        order: true,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_SORT:
            return {
                ...state,
                sort: action.sort,
            }
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        default:
            return state
    }
}