import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { 
    Button, 
    Grid, 
    Cell,
    Card,
} from 'react-md';

import { startVotePost, startDeletePost, togglePostDialog } from '../actions/posts';
import Actions from '../components/actions';
import Vote from '../components/vote';
import PostData from '../components/post-data';

class Post extends Component {
    constructor() {
        super()

        this.handleOnPostDetail = this.handleOnPostDetail.bind(this);
        this.handleOnPostEdit = this.handleOnPostEdit.bind(this);
        this.handleOnPostDelete = this.handleOnPostDelete.bind(this);
        this.handleOnPostVote = this.handleOnPostVote.bind(this);
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
            post,
            togglePostDialog,
        } = this.props;

        togglePostDialog(post);
    }

    handleOnPostDelete() {
        const {
            history,
            startDeletePost,
            post,
        } = this.props;

        startDeletePost(post.id);
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
            <div style={{ marginBottom: 20}}>
            <Grid noSpacing >
                <Cell size={10}>
                    <Card className="md-block-centered">
                        <PostData 
                            post={post} 
                            onPostVote={this.handleOnPostVote} 
                            onPostDetail={this.handleOnPostDetail} 
                            onPostEdit={this.handleOnPostEdit}
                            onPostDelete={this.handleOnPostDelete}
                        />
                        
                        <Actions 
                            onDisplayDetails={ showDetailsOpt ? this.handleOnPostDetail : null }
                            onDelete={ showDeleteOpt ? this.handleOnPostDelete : null }
                            onEdit={ showEditOpt ? this.handleOnPostEdit : null }
                        />
                    </Card>
                </Cell>
                <Cell size={2}>
                    <Vote voteScore={post.voteScore} onVote={this.handleOnPostVote}/>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default withRouter(connect(
    null,
    dispatch => bindActionCreators({
        startVotePost,
        startDeletePost,
        togglePostDialog,
    }, dispatch)
)(Post))