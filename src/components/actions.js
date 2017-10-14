import React from 'react';
import PropTypes from 'prop-types';
import { CardActions, Button } from 'react-md';

const Actions = ({
    onDisplayDetails,
    onDelete,
    onEdit,
}) => (
    <CardActions>
        { !onDisplayDetails ? null : <Button raised primary onClick={onDisplayDetails}>Display more information</Button> }
        { !onDelete ? null : <Button flat secondary onClick={onDelete}>DELETE</Button> }
        { !onEdit ? null : <Button flat primary onClick={onEdit}>EDIT</Button> }
    </CardActions>
)

Actions.propTypes = {
    onDisplayDetails: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default Actions