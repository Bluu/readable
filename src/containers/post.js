import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'

import { startVotePost, startDeletePost} from '../actions/posts'
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
        const {
            history,
            post,
        } = this.props;

        history.push(`/${post.category}/${post.id}`);
    }

    handleOnPostEdit() {
        const {
            history,
            post
        } = this.props;

        history.push(`/edit/${post.id}`);
    }

    handleOnPostDelete() {
        const {
            match: { params: { post_id } },
            history,
            startDeletePost,
            post,
        } = this.props;

        startDeletePost(post.id)
        history.replace('/');
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
                <Vote voteScore={post.voteScore} onVote={this.handleOnPostVote}/>
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
        startDeletePost,
    }, dispatch)
)(Post))