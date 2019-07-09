import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

import './fonts/lineto-circular-pro-bold.ttf'
import './fonts/lineto-circular-pro-book.ttf'
import './fonts/lineto-circular-pro-medium.ttf'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
