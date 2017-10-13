import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({
    onDisplayDetails,
    onDelete,
    onEdit,
}) => (
    <div>
        { !onDisplayDetails ? null : <button onClick={onDisplayDetails}>Display more information</button> }
        { !onDelete ? null : <button onClick={onDelete}>DELETE</button> }
        { !onEdit ? null : <button onClick={onEdit}>EDIT</button> }
    </div>
)

Actions.propTypes = {
    onDisplayDetails: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default Actions