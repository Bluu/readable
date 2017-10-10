import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Route, Switch, Link, withRouter } from 'react-router-dom'

import {
    startFetchCategories
} from '../actions/categories'

import {
    startFetchPosts
} from '../actions/posts'

import PostList from './post-list'
import Posts from './posts'
import PostDetails from './post-details'
import PostAlter from './post-alter'
import PageNotFound from '../components/page-not-found'

class Home extends Component {
    componentDidMount() {
        this.props.startFetchCategories()
        this.props.startFetchPosts()
    }

    render() {
        return (
            <div>
                {/* <Toolbar fixed>
                    <ToolbarRow>
                        <ToolbarSection align="start">
                            <ToolbarTitle>Readable</ToolbarTitle>
                        </ToolbarSection>
                    </ToolbarRow>
                </Toolbar> */}
            
                {/* Adjust top margin for fixed toolbar */}
                <div>
                    <Switch>
                        <Route exact path="/" component={PostList}/>
                        <Route exact path="/new" component={PostAlter}/>
                        <Route exact path="/edit/:post_id" component={PostAlter}/>
                        <Route exact path="/:category" component={PostList}/>
                        <Route exact path="/:category/:post_id" component={PostDetails}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </div>
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
