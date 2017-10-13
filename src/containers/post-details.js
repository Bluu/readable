import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './post';
import CommentList from './comment-list';

import {
    startDeletePost,
    togglePostDialog,
} from '../actions/posts';
import {
    commentsSort,
    startFetchComments,
} from '../actions/comments';

class PostDetails extends Component {
    render() {
        const {
            match: { params: { post_id } },
            posts: { posts },
        } = this.props;
        
        const post = posts.find(({id}) => id === post_id);

        if (!post) {
            return <div>Loading post</div>
        }

        return (
            <div>
                <Post post={post} showDeleteOpt={true} showEditOpt={true} />
                <CommentList postID={post.id}/>
            </div>
        )
    }
}

export default connect(
    // map state to props
    ({ posts, }) => ({
        posts,
    }),
    // map dispatch to props
    dispatch => bindActionCreators({
        commentsSort,
        startDeletePost,
        startFetchComments,
        togglePostDialog,
    }, dispatch) 
)(PostDetails)