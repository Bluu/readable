// export const API_URL = 'http://localhost:5001'

// export const AUTHORIZATION_HEADER = {
//     Authorization: 'I<3U-XOXOXO'
// }

// export const HEADERS = {
//     Authorization: 'I<3U-XOXOXO'
// }
const API_URL = 'http://localhost:5001'
const AUTHORIZATION = 'L12213-I<3U-XOXOXO'

const REQUEST_INIT = {
    headers: {
        Authorization: AUTHORIZATION
    }
}

const REQUEST_INIT_CREATOR = (method, body={}) => ({
    method,
    headers: {
        ...REQUEST_INIT.headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
})


// `GET /categories`  
// **USAGE:**   
//   Get all of the categories available for the app. List is found in categories.js.
//   Feel free to extend this list as you desire.    
export const getCategories = () => (
    fetch(`${API_URL}/categories`, REQUEST_INIT)
    .then(res => res.json())
)

// `GET /:category/posts`  
// **USAGE:**    
//   Get all of the posts for a particular category   

// `GET /posts`  
// **USAGE:**    
//   Get all of the posts. Useful for the main page when no category is selected. 
export const getPosts = () => (
    fetch(`${API_URL}/posts`, REQUEST_INIT)
    .then(res => res.json())
)

// `POST /posts`  
// **USAGE:**  
//   Add a new post  

// **PARAMS:**   
//   id - UUID should be fine, but any unique id will work  
//   timestamp - timestamp in whatever format you like, you can use Date.now() if you like  
//   title - String  
//   body - String  
//   owner - String  
//   category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.  
export const savePost = (post) => (
    fetch(`${API_URL}/posts`, REQUEST_INIT_CREATOR('POST', post))
    .then(res => res.json())
)

// `GET /posts/:id`  
// **USAGE:**  
//   Get the details of a single post  

// `POST /posts/:id`  
// **USAGE:**  
//   Used for voting on a post  

// **PARAMS:**  
//   option - String: Either "upVote" or "downVote"  
export const votePost = (postID, option) => (
    fetch(`${API_URL}/posts/${postID}`, REQUEST_INIT_CREATOR('POST', {
        option
    }))
    .then(res => res.json())
)
  
// `PUT /posts/:id`  
// **USAGE:**  
//   Edit the details of an existing post  

// **PARAMS:**  
//   title - String  
//   body - String  
export const updatePost = (postID, title, body) => (
    fetch(`${API_URL}/posts/${postID}`, REQUEST_INIT_CREATOR('PUT', {
        title,
        body,
    }))
    .then(res => res.json())
)

// `DELETE /posts/:id`  
// **USAGE:**  
//   Sets the deleted flag for a post to 'true'.   
//   Sets the parentDeleted flag for all child comments to 'true'.  
export const deletePost = (postID) => (
    fetch(`${API_URL}/posts/${postID}`, REQUEST_INIT_CREATOR('PUT'))
    .then(res => res.json())
)

// `GET /posts/:id/comments`  
// **USAGE:**  
//   Get all the comments for a single post  
export const getComments = (postID) => (
    fetch(`${API_URL}/posts/${postID}/comments`, REQUEST_INIT)
    .then(res => res.json())
)

// `POST /comments`  
// **USAGE:**  
//   Add a comment to a post  

// **PARAMS:**  
//   id: Any unique ID. As with posts, UUID is probably the best here.  
//   timestamp: timestamp. Get this however you want.  
//   body: String  
//   owner: String  
//   parentId: Should match a post id in the database.  

// `GET /comments/:id`  
// **USAGE:**  
//   Get the details for a single comment  

// `POST /comments/:id`  
// **USAGE:**  
//   Used for voting on a comment.  
export const voteComment = (commentID, option) => (
    fetch(`${API_URL}/comments/${commentID}`, REQUEST_INIT_CREATOR('POST', {
        option
    }))
    .then(res => res.json())
)

// `PUT /comments/:id`  
// **USAGE:**  
//   Edit the details of an existing comment  

// **PARAMS:**  
//   timestamp: timestamp. Get this however you want.  
//   body: String  

// `DELETE /comments/:id`  
// **USAGE:**  
//   Sets a comment's deleted flag to 'true'  