import React from 'react';
import PropTypes from 'prop-types';

const PostData = (
    { 
        onPostDetail,
        onPostEdit,
        onPostDelete,
        onPostVote,
        post: {
            author,
            body,
            category,
            deleted,
            id,
            timestamp,
            title,
            voteScore,
        },
}) => {
    const postDate = new Date(timestamp).toLocaleString()
    
    return (
        <div>
            <div>{title}</div>
            <div>{author}</div>
            <div>{postDate}</div>
            <div>{body}</div>
            <hr/>
        </div>
    )
}

PostData.propTypes = {
    onPostDetail: PropTypes.func,
    onPostEdit: PropTypes.func,
    post: PropTypes.shape({
        author: PropTypes.string,
        body: PropTypes.string,
        category: PropTypes.string,
        deleted: PropTypes.bool,
        id: PropTypes.string,
        timestamp: PropTypes.timestamp,
        title: PropTypes.string,
        voteScore: PropTypes.number,
    }).isRequired
}

export default PostData