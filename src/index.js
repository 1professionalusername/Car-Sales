import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';


//Set up store
const store = createStore(reducer)

//Set up and provider
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);