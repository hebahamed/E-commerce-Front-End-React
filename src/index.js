import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/container/App';
import * as serviceWorker from './serviceWorker';
import productReducer from './store/reducers/reducerProduct';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const myStore = createStore(productReducer,applyMiddleware(thunk));
ReactDOM.render(<Provider store ={myStore}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
