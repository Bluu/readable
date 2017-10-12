import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Post from './post';
import Comment from './comment';
import Sort from '../components/sort';

import {
    startDeletePost,
} from '../actions/posts';
import {
    commentsSort,
    startFetchComments,
} from '../actions/comments';

class PostDetails extends Component {
    constructor() {
        super()

        this.handleOnDeletePost = this.handleOnDeletePost.bind(this)
        this.handleOnEditPost = this.handleOnEditPost.bind(this)
        this.handleOnCommentSort = this.handleOnCommentSort.bind(this)
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

    handleOnCommentSort(sortOption) {
        let sort;

        switch (sortOption) {
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

    componentDidMount() {
        const {
            match: { params: { post_id }},
            startFetchComments,
        } = this.props;

        startFetchComments(post_id);
    }

    render() {
        const {
            match: { params: { post_id } },
            posts: { posts },
            comments: { comments, sort }
        } = this.props;
        
        const post = posts.find(({id}) => id === post_id);
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

        if (!post) {
            return <div>Loading post</div>
        }

        return (
            <div>
                <Post post={post} showDeleteOpt={true} showEditOpt={true} />
                <div>
                    <Sort onSort={this.handleOnCommentSort}/>
                </div>
                {
                    comments.map((comment, index) => <Comment key={index} comment={comment}/>)
                }
            </div>
        )
    }
}

export default connect(
    // map state to props
    ({ posts, comments }) => ({
        posts,
        comments,
    }),
    // map dispatch to props
    dispatch => bindActionCreators({
        commentsSort,
        startDeletePost,
        startFetchComments,
    }, dispatch) 
)(PostDetails)