import React from 'react'

const PostDetail = ({ 
    post: {
        author,
        body,
        category,
        deleted,
        id,
        timestamp,
        title,
        voteScore,
    }
}) => (
    <div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{new Date(timestamp).toLocaleString()}</div>
        <div>{body}</div>
    </div>
)

export default PostDetail