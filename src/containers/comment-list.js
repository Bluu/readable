import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    commentsSort,
    toggleCommentDialog,
    startFetchComments,
} from '../actions/comments';
import Comment from './comment';
import Sort from '../components/sort';
import CommentAlter from './comment-alter';

class CommentList extends Component {
    constructor() {
        super();
        this.handleOnCommentSort = this.handleOnCommentSort.bind(this);
        this.handleNewComment = this.handleNewComment.bind(this);
    }

    handleOnCommentSort(sortOption) {
        let sort;

        switch (sortOption) {
            default:
            case '1':
                sort = {
                    by: 'voteScore',
                    order: true,
                };
                break;
            case '2':
                sort = {
                    by: 'voteScore',
                    order: false,
                };
                break;
            case '3':
                sort = {
                    by: 'timestamp',
                    order: true,
                };
                break;
            case '4':
                sort = {
                    by: 'timestamp',
                    order: false,
                };
                break;
        }

        this.props.commentsSort(sort);
    }

    handleNewComment () {
        this.props.toggleCommentDialog();
    }

    componentDidMount() {
        const {
            postID,
            startFetchComments,
        } = this.props;

        startFetchComments(postID);
    }

    render() {
        const {
            postID,
            comments: { comments, sort },
        } = this.props

        comments.sort((a, b) => {
            if (sort.order) {
                if (a[sort.by] > b[sort.by]) {
                    return -1;
                }
                if (a[sort.by] < b[sort.by]) {
                    return 1;
                }
            } else {
                if (a[sort.by] < b[sort.by]) {
                    return -1;
                }
                if (a[sort.by] > b[sort.by]) {
                    return 1;
                }
            }

            return 0;
        })

        return (
            <div>
                <button onClick={this.handleNewComment}>Add new comment</button>
                <div>
                    <Sort onSort={this.handleOnCommentSort}/>
                </div>
                <div>
                    {
                        comments.map((comment, index) => <Comment key={index} comment={comment}/>)
                    }
                </div>
                <CommentAlter postID={postID}/>
            </div>
        )
    }
}



export default connect(
    // map state to props
    ({ comments }) => ({
        comments,
    }),
    // map dispatch to props
    (dispatch) => bindActionCreators({
        commentsSort,
        toggleCommentDialog,
        startFetchComments,
    }, dispatch)
)(CommentList)