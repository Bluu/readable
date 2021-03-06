import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

export default createStore(
    reducers,
    process.env.NODE_ENV === 'development' ?
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ) : 
        compose (
            applyMiddleware(thunk)
        )
)