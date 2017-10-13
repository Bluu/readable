import {
    SORT_COMMENTS,
    FETCH_COMMENTS,
    TOGGLE_COMMENT_DIALOG,
} from '../actions/comments';

const initialState = {
    comments: [],
    sort: {
        by: 'voteScore',
        order: true,
    },
    dialog: {
        visible: false,
        selectedComment: {},
    },
};

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
        case TOGGLE_COMMENT_DIALOG:
            return {
                ...state,
                dialog: {
                    visible: !state.dialog.visible,
                    selectedComment: action.selectedComment,
                },
            }
        default:
            return state;
    }
}