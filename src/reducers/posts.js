import {
    POSTS_SORT_BY,
    POSTS_SORT_ORDER,
    FETCH_POSTS,
} from '../actions/posts'

const initialState = {
    posts: [],
    sortBy: 'voteScore',
    sortOrder: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy,
            }
        case POSTS_SORT_ORDER:
            return {
                ...state,
                sortOrder: !state.sortOrder,
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