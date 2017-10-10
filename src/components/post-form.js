import React from 'react'
import PropTypes from 'prop-types'

const PostForm = ({
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
        bodyInput,
        authorInput,
        categoryInput;

    const formSubmit = () => {
        const post = {
            id: id || Math.random().toString(),
            title: titleInput.value,
            body: bodyInput.value,
            author: authorInput.value,
            category: categoryInput.value,
            timestamp: Date.now(),
        };

        onFormSubmit(post);
    }

    return (
        <form onSubmit={
            (e) => {
                e.preventDefault()
                formSubmit()
            }
        }>
            <div>
                <span>Title:</span>
                <input 
                    id="title" 
                    type="text" 
                    ref={(input) => titleInput = input} 
                    defaultValue={title}
                />
            </div>
            <div>
                <span>Description:</span>
                <textarea 
                    id="body" 
                    ref={(input) => bodyInput = input}
                    defaultValue={body}
                />
            </div>
            <div>
                <span>Author:</span>
                <input 
                    id="author" 
                    type="text" 
                    ref={(input) => authorInput = input}
                    defaultValue={author}
                />
            </div>
            <div>
                <span>Category:</span>
                <select 
                    id="category" 
                    ref={(input) => categoryInput = input}
                    defaultValue={category}
                >
                    { categories.map(({name}) => <option key={name} value={name}>{name}</option>) }
                </select>
            </div>
            
            <button type="submit">{`${id ? 'Edit' : 'Save'} post`}</button>
        </form>
    )
}

PostForm.propTypes = {
    onFormSubmit: PropTypes.func,
    categories: PropTypes.array,
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
    })
}

export default PostForm;