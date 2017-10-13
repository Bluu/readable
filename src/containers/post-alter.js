import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import {
    startAddPost,
    startUpdatePost,
    togglePostDialog,
} from '../actions/posts';
import PostForm from '../components/post-form';

class PostAlter extends Component {
    constructor() {
        super()

        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleEditPost = this.handleEditPost.bind(this);
        this.handleOnDialogClose = this.handleOnDialogClose.bind(this);
    }

    handleNewPost(post) {
        const {
            startAddPost,
            togglePostDialog,
        } = this.props;

        startAddPost(post);
        togglePostDialog();
    }

    handleEditPost(post) {
        const {
            startUpdatePost,
            togglePostDialog,
        } = this.props;

        startUpdatePost(post.id, post.title, post.body);
        togglePostDialog();
    }

    handleOnDialogClose() {
        this.props.togglePostDialog();
    }

    render() {
        const { 
            categories,
            dialog,
        } = this.props

        return (
            <PostForm 
                visible={dialog.visible}
                onClose={this.handleOnDialogClose}
                onFormSubmit={dialog.selectedPost.id ? this.handleEditPost : this.handleNewPost} 
                categories={categories} 
                post={dialog.selectedPost} 
            />
        )
    }
}

export default withRouter(connect (
    // map state to props
    ({ categories, posts: { dialog } }) => ({
        categories,
        dialog,
    }), 
    // map dispatch to props
    dispatch => bindActionCreators({
        startAddPost,
        startUpdatePost,
        togglePostDialog,
    }, dispatch) 
)(PostAlter))