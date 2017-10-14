import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const Vote = ({ voteScore, onVote }) => (
    <div style={{ textAlign: 'center' }}>
        <div>
            <Button icon primary swapTheming onClick={() => onVote('upVote')}>keyboard_arrow_up</Button>
        </div>
        <div>
            <span className="md-display-1">{ voteScore }</span>
        </div>
        <div>
            <Button icon secondary swapTheming onClick={() => onVote('downVote')}>keyboard_arrow_down</Button>
        </div>
    </div>
)

Vote.propTypes = {
    voteScore: PropTypes.number.isRequired,
    onVote: PropTypes.func.isRequired,
}

export default Vote;