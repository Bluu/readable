import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import store from './store'
import Home from './containers/home'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker()
