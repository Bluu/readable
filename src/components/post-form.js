import React from 'react';
import PropTypes from 'prop-types';
import { Button, DialogContainer, TextField, SelectField } from 'react-md';
import uuid from 'uuid/v1';

const PostForm = ({
    visible,
    onClose,
    onFormSubmit,
    categories,
    post: {
        id,
        title,
        body,
        author,
        category,
    }
}) => {
    let titleInput,
        authorInput,
        categoryInput,
        bodyInput;

    const formSubmit = () => {
        const title = titleInput.getField().value;
        const author = authorInput.getField().value;
        const category = categoryInput.value;
        const body = bodyInput.getField().value;

        if (!title) {
            return titleInput.focus();
        }

        if (!author) {
            return authorInput.focus();
        }

        if (!category) {
            return;
        }

        if (!body) {
            return bodyInput.focus();
        }

        const post = {
            id: id || uuid(),
            title,
            body,
            author,
            category,
            timestamp: Date.now(),
        };

        onFormSubmit(post);
    }

    const actions = [
        <Button flat secondary onClick={onClose}>Cancel</Button>,
        <Button flat primary onClick={formSubmit}>Save</Button>,
    ];

    return (
        <DialogContainer
            id="save-post-dialog"
            visible={visible}
            onHide={onClose}
            actions={actions}
            title={`${id ? 'Edit' : 'New'} Post`}
        >
            <TextField
                id="title-field"
                label="Title"
                placeholder="Post title"
                defaultValue={title}
                required
                ref={(input) => titleInput = input} 
            />
            <TextField
                id="author-field"
                label="Author"
                placeholder="Post author"
                defaultValue={author}
                required
                ref={(input) => authorInput = input} 
            />
            <SelectField
                id="category-field"
                label="Category"
                placeholder="Select a category"
                fullWidth
                menuItems={categories.map(category=> ({ label: category.name ,value: category.path}))}
                defaultValue={category}
                required
                ref={(input) => categoryInput = input}
            />
            <TextField
                id="description-field"
                label="Description"
                placeholder="Post description"
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

PostForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
    })
}

export default PostForm;