import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    startAddComment,
    startUpdateComment,
    toggleCommentDialog,
} from '../actions/comments';
import CommentForm from '../components/comment-form';

class CommentAlter extends Component {
    constructor() {
        super()

        this.handleNewComment = this.handleNewComment.bind(this);
        this.handleEditComment = this.handleEditComment.bind(this);
        this.handleOnDialogClose = this.handleOnDialogClose.bind(this);
    }

    handleNewComment(comment) {
        const {
            postID,
            startAddComment,
            toggleCommentDialog,
        } = this.props;

        comment.parentId = postID;

        startAddComment(comment);
        toggleCommentDialog();
    }

    handleEditComment(comment) {
        const {
            startUpdateComment,
            toggleCommentDialog,
        } = this.props;

        startUpdateComment(comment.id, comment.timestamp, comment.body);
        toggleCommentDialog();
    }

    handleOnDialogClose() {
        this.props.toggleCommentDialog();
    }

    render() {
        const { 
            dialog,
        } = this.props;

        return (
            <CommentForm 
                visible={dialog.visible}
                onClose={this.handleOnDialogClose}
                onFormSubmit={dialog.selectedComment.id ? this.handleEditComment : this.handleNewComment} 
                comment={dialog.selectedComment} 
            />
        )
    }
}

export default connect (
    // map state to props
    ({ comments: { dialog } }) => ({
        dialog
    }), 
    // map dispatch to props
    dispatch => bindActionCreators({
        startAddComment,
        startUpdateComment,
        toggleCommentDialog,
    }, dispatch) 
)(CommentAlter)