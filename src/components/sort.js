import React from 'react';
import { 
    Grid,
    Cell,
    RadioGroup,
    Radio,
    IconToggle,
} from 'react-mdc-web';

const Sort = ({ sortedBy, sortedOrder, onSortBy, onSortOrder}) => (
    <Grid>
        <Cell col={8}>
            <RadioGroup 
                onChange={({target: {value}})=> onSortBy(value)}
                name="sort"
                value={sortedBy}
            >
                <Radio value="voteScore">Sort by vote score</Radio>
                <Radio value="timestamp">Sort by timestamp</Radio>
            </RadioGroup>
        </Cell>
        <Cell col={4}>
            Order
            <IconToggle 
                className="material-icons" 
                onClick={onSortOrder}
            >
                {sortedOrder ? 'arrow_downward' : 'arrow_upward'}
            </IconToggle>
        </Cell>
    </Grid>
)

export default Sort