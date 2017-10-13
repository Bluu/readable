import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import WebFontLoader from 'webfontloader';

import './index.css';
import store from './store';
import Home from './containers/home';
import registerServiceWorker from './registerServiceWorker';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons'],
    },
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker();
