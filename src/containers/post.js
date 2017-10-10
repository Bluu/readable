import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

import { startVotePost } from '../actions/posts'
import PostActions from '../components/post-actions'
import Vote from '../components/vote';
import PostData from '../components/post-data';

class Post extends Component {
    constructor() {
        super()

        this.handleOnPostDetail = this.handleOnPostDetail.bind(this)
        this.handleOnPostEdit = this.handleOnPostEdit.bind(this)
        this.handleOnPostDelete = this.handleOnPostDelete.bind(this)
        this.handleOnPostVote = this.handleOnPostVote.bind(this)
    }

    handleOnPostDetail() {

    }

    handleOnPostEdit() {

    }

    handleOnPostDelete() {

    }

    handleOnPostVote(voteType) {
        const { 
            post: { id },
            startVotePost,
        } = this.props;

        startVotePost(id, voteType);
    }

    render() {
        const { 
            post,
            showDetailsOpt,
            showDeleteOpt,
            showEditOpt,
        } = this.props;
        
        return (
            <div>
                <PostData 
                    post={post} 
                    onPostVote={this.handleOnPostVote} 
                    onPostDetail={this.handleOnPostDetail} 
                    onPostEdit={this.handleOnPostEdit}
                    onPostDelete={this.handleOnPostDelete}
                />
                <PostActions 
                    onDisplayDetails={ showDetailsOpt ? this.handleOnPostDetail : null }
                    onDeletePost={ showDeleteOpt ? this.handleOnPostDelete : null }
                    onEditPost={ showEditOpt ? this.handleOnPostEdit : null }
                />
            </div>
        )
    }
}

export default withRouter(connect(
    // ({ posts }) => ({
    //     posts
    // }),
    null,
    dispatch => bindActionCreators({
        startVotePost,
    }, dispatch)
)(Post))