import React from 'react';

const Sort = ({ onSort }) => (
    <select onChange={e => onSort(e.target.value)}>
        <option value="1">Vote Score - highest first</option>
        <option value="2">Vote Score - Lowest first</option>
        <option value="3">Time - Newest first</option>
        <option value="4">Time - Oldest first</option>
    </select>
)

export default Sort