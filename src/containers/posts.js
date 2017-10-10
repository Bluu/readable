import React, { Component, } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import PostData from '../components/post-data'

class Posts extends Component {
    constructor() {
        super()
        this.handleOnPostDetail = this.handleOnPostDetail.bind(this)
    }

    handleOnPostDetail(category, postID) {
        this.props.history.push(`/${category}/${postID}`)
    }

    render() {
        const {
            match: { params: { category } },
            posts
        } = this.props
        console.log(posts)
        const filteredPosts = category ? posts.filter((post) => post.category === category) : posts;

        return (
            <div>
            {
                filteredPosts.map(post => <PostData key={post.id} post={post} onPostDetail={this.handleOnPostDetail}/>)
            }
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default connect(
    // map state to props
    ({ categories, posts }) => ({
        categories,
        posts,
    }),
    // map dispatch to props
)(Posts)