import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';

import { Provider } from 'react-redux';
import configStore from './store/storeConfig';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
, document.getElementById('app'));