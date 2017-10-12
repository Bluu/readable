import {
    SORT_COMMENTS,
    FETCH_COMMENTS,
} from '../actions/comments'

const initialState = {
    comments: [],
    sort: {
        by: 'voteScore',
        order: true,
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SORT_COMMENTS:
            return {
                ...state,
                sort: action.sort,
            }
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.comments,
            }
        default:
            return state
    }
}