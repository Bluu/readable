import React, { Component, } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Grid, Cell } from 'react-md';

import { 
    postsSort,
    togglePostDialog,
} from '../actions/posts';
import Post from './post';
import Categories from '../components/categories';
import Sort from '../components/sort';

class PostList extends Component {
    constructor() {
        super();
        this.handleOnPostsSort = this.handleOnPostsSort.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
    }

    handleOnPostsSort(sortOption) {
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

        this.props.postsSort(sort);
    }

    handleNewPost () {
        this.props.togglePostDialog();
    }

    render() {
        const {
            match: { params: { category } },
            categories,
            posts: { posts, sort },
        } = this.props;
        
        const filteredPosts = category ? posts.filter((post) => post.category === category) : posts;

        filteredPosts.sort((a, b) => {
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
                <Grid>
                    <span className="md-display-2">{`${!category ? 'All' : category} Posts`}&nbsp;</span>
                    <Button floating primary onClick={this.handleNewPost}>add</Button>
                </Grid>
                <Grid>
                    <Cell size={4} className="md-text-center">
                        <Categories categories={categories} currentCategory={category}/>
                    </Cell>
                    <Cell size={8}>
                    
                    </Cell>
                </Grid>
                <div>
                    <Categories categories={categories} currentCategory={category}/>
                </div>
                <div>
                    <Sort onSort={this.handleOnPostsSort}/>
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
        postsSort,
        togglePostDialog,
    }, dispatch)
)(PostList)