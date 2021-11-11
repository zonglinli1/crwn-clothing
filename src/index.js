import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {store}from './redux/store'
import { persistor } from './redux/store';
import {PersistGate} from 'redux-persist/es/integration/react'

ReactDOM.render(
    <Provider store={store} > 
        <Router>
            <PersistGate persistor={persistor}>
            <App/>
            </PersistGate>
        </Router>
    </Provider>, document.getElementById('root') );