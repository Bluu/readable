import React from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer, TextField } from 'react-md';

const CommentForm = ({
    visible,
    onClose,
    onFormSubmit,
    comment: {
        id,
        author,
        body,
    }
}) => {
    let authorInput,
        bodyInput;

    const formSubmit = () => {
        const author = authorInput.getField().value;
        const body = bodyInput.getField().value;

        if (!author) {
            return authorInput.focus();
        }

        if (!body) {
            return bodyInput.focus();
        }

        const comment = {
            id: id || Math.random().toString(),
            author,
            body,
            timestamp: Date.now(),
        };

        onFormSubmit(comment);
    }

    const actions = [
        <Button flat secondary onClick={onClose}>Cancel</Button>,
        <Button flat primary onClick={formSubmit}>Save</Button>,
    ];

    return (
        <DialogContainer
            id="save-comment-dialog"
            visible={visible}
            onHide={onClose}
            actions={actions}
            title={`${id ? 'Edit' : 'New'} Comment`}
        >
            <TextField
                id="author-field"
                label="Author"
                placeholder="Comment author"
                defaultValue={author}
                required
                disabled={!!id}
                ref={(input) => authorInput = input} 
            />
            <TextField
                id="description-field"
                label="Description"
                placeholder="Comment description"
                defaultValue={body}
                required
                resize={{ min: 200, max: 300 }}
                rows={2}
                fullWidth
                ref={(input) => bodyInput = input} 
            />
            
        </DialogContainer>
    )
}

CommentForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    comment: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        body: PropTypes.string,
    })
}

export default CommentForm;