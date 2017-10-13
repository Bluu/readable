import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Categories = ({categories, currentCategory}) => (
    <ul>
        <li>
            <Link to="/">All</Link>
            { !currentCategory ? <span>selected</span> : <div></div> }
        </li>
        { 
            categories.map(({name, path}, index) => (
                <li key={index}>
                    <Link to={path}>{ name }</Link>
                    { currentCategory === path ? <span>selected</span> : <div></div> }
                </li>
            ))
        }
    </ul>
)

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    currentCategory: PropTypes.string,
}

export default Categories;