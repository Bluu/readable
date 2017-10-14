import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Button, Toolbar } from 'react-md';

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
    constructor () {
        super()

        this.handleNavBack = this.handleNavBack.bind(this);
        this.handleNavHome = this.handleNavHome.bind(this);
    }
    componentDidMount() {
        this.props.startFetchCategories();
        this.props.startFetchPosts();
    }

    handleNavBack () {
        this.props.history.goBack();
    }

    handleNavHome () {
        this.props.history.push('/');
    }

    render() {
        const { 
            location: { pathname } 
        } = this.props;

        return (
            <div>
                <Toolbar
                    colored
                    title="READABLE by German Cuamea"
                    nav={pathname === '/' ? null : 
                        <Button
                            key="action"
                            icon
                            onClick={this.handleNavBack}
                        >
                            arrow_back
                        </Button>
                    }
                    actions={pathname === '/' ? null : 
                        <Button
                            key="action"
                            icon
                            onClick={this.handleNavHome}
                        >
                            home
                        </Button>
                    }
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
