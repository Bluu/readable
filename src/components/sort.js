import React from 'react';
import PropTypes from 'prop-types';
import { SelectField } from 'react-md';

const sortOptions = [
    {
        label: 'Vote Score - highest first',
        value: '1',
    },
    {
        label: 'Vote Score - Lowest first',
        value: '2',
    },
    {
        label: 'Time - Newest first',
        value: '3',
    },
    {
        label: 'Time - Oldest first',
        value: '4',
    }
];

const Sort = ({ onSort, type }) => (
    <SelectField
        id="select-sort"
        label={`Sort ${type}`}
        placeholder="Select a sort option"
        className="md-cell"
        menuItems={sortOptions}
        onChange={onSort}
    />
)

Sort.propTypes = {
    onSort: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default Sort