import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Toolbar } from 'react-md';

import {
    startFetchCategories,
} from '../actions/categories';

import {
    startFetchPosts,
} from '../actions/posts';

import PostList from './post-list';
import PostDetails from './post-details';
import PostAlter from './post-alter';
import PageNotFound from '../components/page-not-found';

class Home extends Component {
    componentDidMount() {
        this.props.startFetchCategories();
        this.props.startFetchPosts();
    }

    render() {
        return (
            <div>
                <Toolbar
                    colored
                    title="READABLE by German Cuamea"
                />
                <div>
                    <Switch>
                        <Route exact path="/" component={PostList}/>
                        <Route exact path="/:category" component={PostList}/>
                        <Route exact path="/:category/:post_id" component={PostDetails}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
                <PostAlter/>
            </div>
        )
    }
}

Home.propTypes = {
    startFetchCategories: PropTypes.func.isRequired,
    startFetchPosts: PropTypes.func.isRequired,
};

export default withRouter(
    connect( 
        // map state to props
        null,
        // map dispatch to props
        dispatch => bindActionCreators({
            startFetchCategories, 
            startFetchPosts,
        }, dispatch) 
    )(Home)
)
