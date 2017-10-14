import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  
    Grid, 
    Cell,
    Card,
} from 'react-md';

import { 
    startVoteComment, 
    startDeleteComment,
    toggleCommentDialog,
} from '../actions/comments';
import Actions from '../components/actions';
import Vote from '../components/vote';
import CommentData from '../components/comment-data';

class Comment extends Component {
    constructor() {
        super()

        this.handleOnCommentEdit = this.handleOnCommentEdit.bind(this);
        this.handleOnCommentDelete = this.handleOnCommentDelete.bind(this);
        this.handleOnCommentVote = this.handleOnCommentVote.bind(this);
    }

    handleOnCommentEdit() {
        const {
            comment,
            toggleCommentDialog,
        } = this.props;

        toggleCommentDialog(comment);
    }

    handleOnCommentDelete() {
        const {
            comment,
            startDeleteComment,
        } = this.props;

        startDeleteComment(comment.id);
    }

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
        } = this.props;

        return (
            <div style={{ marginBottom: 20}}>
                <Grid noSpacing >
                    <Cell size={10}>
                        <Card className="md-block-centered">
                            <CommentData 
                                comment={comment}
                            />
                            
                            <Actions 
                                onDelete={this.handleOnCommentDelete} 
                                onEdit={this.handleOnCommentEdit}
                            />
                        </Card>
                    </Cell>
                    <Cell size={2}>
                        <Vote voteScore={comment.voteScore} onVote={this.handleOnCommentVote}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => bindActionCreators({
        startVoteComment,
        startDeleteComment,
        toggleCommentDialog,
    }, dispatch)
)(Comment)