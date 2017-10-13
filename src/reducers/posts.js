import {
    POSTS_SORT,
    FETCH_POSTS,
    TOGGLE_POST_DIALOG,
} from '../actions/posts';

const initialState = {
    posts: [],
    sort: {
        by: 'voteScore',
        order: true,
    },
    dialog: {
        visible: false,
        selectedPost: {},
    },
};

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
        case TOGGLE_POST_DIALOG:
            return {
                ...state,
                dialog: {
                    visible: !state.dialog.visible,
                    selectedPost: action.selectedPost,
                },
            }
        default:
            return state;
    }
}