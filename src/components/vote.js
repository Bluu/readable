import React from 'react';
import PropTypes from 'prop-types';

const Vote = ({ voteScore, onVote }) => (
    <div style={{ textAlign: 'center' }}>
        <div>
            <button onClick={() => onVote('upVote')}>vote up</button>
        </div>
        <div>
            { voteScore }
        </div>
        <div>
            <button onClick={() => onVote('downVote')}>vote down</button>
        </div>
    </div>
)

Vote.propTypes = {
    voteScore: PropTypes.number.isRequired,
    onVote: PropTypes.func.isRequired,
}

export default Vote;