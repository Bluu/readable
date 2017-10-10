import React from 'react';

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

export default Vote;