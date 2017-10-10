import React, { Component, } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { 
    postsSortBy,
    postsSortOrder,
} from '../actions/posts';
import Post from './post';
import Categories from '../components/categories';
// import Sort from '../components/sort';

class PostList extends Component {
    constructor() {
        super()
        this.handleOnSortBy = this.handleOnSortBy.bind(this)
        this.handleOnSortOrder = this.handleOnSortOrder.bind(this)
    }

    handleOnSortBy(sortBy) {
        this.props.postsSortBy(sortBy)
    }

    handleOnSortOrder() {
        this.props.postsSortOrder()
    }

    render() {
        const {
            match: { params: { category } },
            categories,
            posts: { posts, sortBy, sortOrder },
        } = this.props
        
        const filteredPosts = category ? posts.filter((post) => post.category === category) : posts

        filteredPosts.sort((a, b) => {
            if (sortOrder) {
                if (a[sortBy] < b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                    return 1;
                }
            } else {
                if (a[sortBy] > b[sortBy]) {
                    return -1;
                }
                if (a[sortBy] < b[sortBy]) {
                    return 1;
                }
            }

            return 0;
        })

        return (
            <div>
                <Link to="/new">Add new post</Link>
                <div>
                    <Categories categories={categories} currentCategory={category}/>
                </div>
                <div>
                    { filteredPosts.map(post => <Post key={post.id} post={post} showDetailsOpt={true} />) } 
                </div>
            </div>
        )
    }
}



export default connect(
    // map state to props
    ({ categories, posts }) => ({
        categories,
        posts,
    }),
    // map dispatch to props
    (dispatch) => bindActionCreators({
        postsSortBy,
        postsSortOrder,
    }, dispatch)
)(PostList)