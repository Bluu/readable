import React from 'react';
import PropTypes from 'prop-types';

const CommentData = (
    { 
        comment: {
            author,
            body,
            timestamp,
        },
}) => {
    const commentDate = new Date(timestamp).toLocaleString()
    
    return (
        <div>
            <div>{author}</div>
            <div>{commentDate}</div>
            <div>{body}</div>
        </div>
    )
}

CommentData.propTypes = {
    post: PropTypes.shape({
        author: PropTypes.string,
        body: PropTypes.string,
        timestamp: PropTypes.timestamp,
        voteScore: PropTypes.number,
    })
}

export default CommentData