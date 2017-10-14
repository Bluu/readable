import React from 'react';
import PropTypes from 'prop-types';
import { 
    CardTitle, 
    CardText, 
} from 'react-md';

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
            <CardTitle title={author} subtitle={commentDate}/>
            <CardText>
                <p>{body}</p>
            </CardText>
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