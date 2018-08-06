import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <App />
        </BrowserRouter >
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
