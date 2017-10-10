import React, { Component, PureComponent } from 'react'

class CommentForm extends Component {
    render() {
        return (
            <form>
                <textarea id="body"></textarea>
                <input id="owner" type="text" />
            </form>
        )
    }
}

// id: Any unique ID. As with posts, UUID is probably the best here.  
// timestamp: timestamp. Get this however you want.  
// body: String  
// owner: String  
// parentId: Should match a post id in the database.  