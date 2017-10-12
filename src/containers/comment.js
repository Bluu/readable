import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { withRouter } from 'react-router-dom'

import { 
    startVoteComment, 
    // startDeletePost,
} from '../actions/comments'
// import PostActions from '../components/post-actions'
import Vote from '../components/vote';
import CommentData from '../components/comment-data';

class Comment extends Component {
    constructor() {
        super()

        // this.handleOnPostDetail = this.handleOnPostDetail.bind(this)
        // this.handleOnPostEdit = this.handleOnPostEdit.bind(this)
        // this.handleOnPostDelete = this.handleOnPostDelete.bind(this)
        this.handleOnCommentVote = this.handleOnCommentVote.bind(this)
    }

    // handleOnPostDetail() {
    //     const {
    //         history,
    //         post,
    //     } = this.props;

    //     history.push(`/${post.category}/${post.id}`);
    // }

    // handleOnPostEdit() {
    //     const {
    //         history,
    //         post
    //     } = this.props;

    //     history.push(`/edit/${post.id}`);
    // }

    // handleOnPostDelete() {
    //     const {
    //         match: { params: { post_id } },
    //         history,
    //         startDeletePost,
    //         post,
    //     } = this.props;

    //     startDeletePost(post.id)
    //     history.replace('/');
    // }

    handleOnCommentVote(voteType) {
        const { 
            comment: { id },
            startVoteComment,
        } = this.props;

        startVoteComment(id, voteType);
    }

    render() {
        const { 
            comment,
            // showDetailsOpt,
            // showDeleteOpt,
            // showEditOpt,
        } = this.props;
        // console.log('comment', comment)
        return (
            <div>
                <CommentData 
                    comment={comment}
                />
                <Vote voteScore={comment.voteScore} onVote={this.handleOnCommentVote}/>
                {/* 
                <PostActions 
                    onDisplayDetails={ showDetailsOpt ? this.handleOnPostDetail : null }
                    onDeletePost={ showDeleteOpt ? this.handleOnPostDelete : null }
                    onEditPost={ showEditOpt ? this.handleOnPostEdit : null }
                /> */}
            </div>
        )
    }
}

export default connect(
    // ({ posts }) => ({
    //     posts
    // }),
    null,
    dispatch => bindActionCreators({
        startVoteComment,
        // startDeletePost,
    }, dispatch)
)(Comment)