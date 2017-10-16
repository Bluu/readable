import _ from 'lodash';

import {
    SORT_COMMENTS,
    FETCH_COMMENTS,
    TOGGLE_COMMENT_DIALOG,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
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
                comments: _.unionBy(state.comments, action.comments, 'id'),
            }
        case TOGGLE_COMMENT_DIALOG:
            return {
                ...state,
                dialog: {
                    visible: !state.dialog.visible,
                    selectedComment: action.selectedComment,
                },
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat([action.comment]),
            }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map(stateComment => stateComment.id === action.comment.id ? action.comment : stateComment),
            }
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(({id}) => id !== action.comment.id),
            }
        default:
            return state;
    }
}