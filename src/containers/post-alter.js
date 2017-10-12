import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import {
    startAddPost,
    startUpdatePost,
} from '../actions/posts'
import PostForm from '../components/post-form'

class PostAlter extends Component {
    constructor() {
        super()

        this.handleNewPost = this.handleNewPost.bind(this)
        this.handleEditPost = this.handleEditPost.bind(this)
    }

    handleNewPost(post) {
        const {
            history,
            startAddPost,
        } = this.props;

        startAddPost(post);
        history.replace('/');
    }

    handleEditPost(post) {
        const {
            history,
            startUpdatePost,
        } = this.props;

        startUpdatePost(post.id, post.title, post.body);
        history.replace('/');
    }

    render() {
        const { 
            categories,
            posts,
            match: { path, params: { post_id }}
        } = this.props

        const post = posts.find(post => post.id === post_id)

        if (path === '/edit/:post_id' && posts.length === 0) {
            return <span>Loading</span>;
        } else if (path === '/edit/:post_id' && posts.length > 0 && !post) {
            return <span>Post not found</span>;
        }

        return (
            <PostForm 
                onFormSubmit={post ? this.handleEditPost : this.handleNewPost} 
                categories={categories} 
                post={post ? post : {}} 
            />
        )
    }
}

export default connect (
    // map state to props
    ({ categories, posts: {posts}  }) => ({
        categories,
        posts,
    }), 
    // map dispatch to props
    dispatch => bindActionCreators({
        startAddPost,
        startUpdatePost,
    }, dispatch) 
)(PostAlter)