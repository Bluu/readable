import {
    POSTS_SORT,
    FETCH_POSTS,
    TOGGLE_POST_DIALOG,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
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
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat([action.post]),
            }
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(statePost => statePost.id === action.post.id ? action.post : statePost),
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(({id}) => id !== action.post.id),
            }
        default:
            return state;
    }
}