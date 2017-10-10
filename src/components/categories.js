import React from 'react';
import { Link } from 'react-router-dom';

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

export default Categories;