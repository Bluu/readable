import React from 'react';
import PropTypes from 'prop-types';
import { 
    Card, 
    CardTitle, 
    CardText, 
    Slider 
} from 'react-md';

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
        commentsCount,
}) => {
    const postDate = new Date(timestamp).toLocaleString()
    
    return (
        <div>
            <CardTitle title={title} subtitle={`by ${author} | ${postDate} ${!commentsCount ? '' : '| ' + commentsCount}`}/>
            <CardText>
                <p>{body}</p>
            </CardText>
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
    }).isRequired,
    commentsCount: PropTypes.number,
}

export default PostData