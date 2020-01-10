// External Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// My Assets
import App from './App';
import * as serviceWorker from './serviceWorker';
import {tasks} from './reducers' 

// Redux setup 
const store = createStore(tasks)









ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 

    document.getElementById('root')
);



serviceWorker.unregister();
