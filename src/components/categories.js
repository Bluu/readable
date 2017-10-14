import React from 'react';
import PropTypes from 'prop-types';
import {
    FontIcon,
    List,
    ListItem,
  } from 'react-md';

const Categories = ({categories, currentCategory, onCategorySelect}) => (
    <List className="md-cell--12 md-paper md-paper--1">
        <ListItem 
            primaryText="All" 
            onClick={() => onCategorySelect('/')} 
            rightIcon={ !currentCategory ? <FontIcon>star</FontIcon>: <div></div> }
        />
        {
            categories.map(({name, path}, index) => (
                <ListItem 
                    key={index} 
                    primaryText={name} 
                    onClick={() => onCategorySelect(path)} 
                    rightIcon={ currentCategory === path ? <FontIcon>star</FontIcon>: <div></div> }
                />
            ))
        }
    </List>
)

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.string,
    onCategorySelect: PropTypes.func,
}

export default Categories;