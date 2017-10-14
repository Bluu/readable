import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Avatar,
    Divider,
    FontIcon,
    List,
    ListItem,
    Subheader,
  } from 'react-md';

const Categories = ({categories, currentCategory, onCategorySelect}) => (
    <div>
        <span className="md-title">Categories</span>
    
        <List className="md-cell md-paper md-paper--1">
            <ListItem primaryText="All" onClick={() => onCategorySelect()} />
            {
                categories.map(({name, path}, index) => (
                    <ListItem key={index} primaryText={name} onClick={() => onCategorySelect(path)} />
                ))
            }
        </List>
    </div>
)

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.string,
    onCategorySelect: PropTypes.func,
}

export default Categories;

// <ul>
    //     <li>
    //         <Link to="/">All</Link>
    //         { !currentCategory ? <span>selected</span> : <div></div> }
    //     </li>
    //     { 
    //         categories.map(({name, path}, index) => (
    //             <li key={index}>
    //                 <Link to={path}>{ name }</Link>
    //                 { currentCategory === path ? <span>selected</span> : <div></div> }
    //             </li>
    //         ))
    //     }
    // </ul>