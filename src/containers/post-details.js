import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PostDetail from '../components/post-detail'
import PostActions from '../components/post-actions'

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
            posts,
        } = this.props
        
        const post = posts.find(({id}) => id === post_id)

        if (!post) {
            return <div>Loading post</div>
        }

        return (
            <div>
                <PostDetail post={post} />
                <PostActions onDeletePost={this.handleOnDeletePost} onEditPost={this.handleOnEditPost}/>
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