import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Post from './post'

import {
    startDeletePost
} from '../actions/posts'

class PostDetails extends Component {
    constructor() {
        super()

        this.handleOnDeletePost = this.handleOnDeletePost.bind(this)
        this.handleOnEditPost = this.handleOnEditPost.bind(this)
    }

    handleOnDeletePost() {
        const {
            match: { params: { post_id } },
            startDeletePost,
        } = this.props

        startDeletePost(post_id)
    }

    handleOnEditPost() {
        const {
            match: { params: { post_id }},
            history,
        } = this.props

        history.push(`/edit/${post_id}`)
    }

    componentDidMount() {
        
    }

    render() {
        const {
            match: { params: { post_id } },
            posts: { posts },
        } = this.props
        
        const post = posts.find(({id}) => id === post_id)

        if (!post) {
            return <div>Loading post</div>
        }

        return (
            <div>
                <Post post={post} showDeleteOpt={true} showEditOpt={true} />
            </div>
        )
    }
}

export default connect(
    // map state to props
    ({ posts }) => ({
        posts,
    }),
    // map dispatch to props
    dispatch => bindActionCreators({
        startDeletePost,
    }, dispatch) 
)(PostDetails)