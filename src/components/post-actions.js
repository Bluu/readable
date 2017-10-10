import React from 'react'
import PropTypes from 'prop-types'

const PostActions = ({
    onDisplayDetails,
    onDeletePost,
    onEditPost
}) => (
    <div>
        { !onDisplayDetails ? null : <button onClick={onDisplayDetails}>Read more</button> }
        { !onDeletePost ? null : <button onClick={onDeletePost}>DELETE</button> }
        { !onEditPost ? null : <button onClick={onEditPost}>EDIT</button> }
    </div>
)

PostActions.propTypes = {
    onDisplayDetails: PropTypes.func,
    onDeletePost: PropTypes.func,
    onEditPost: PropTypes.array,
}

export default PostActions