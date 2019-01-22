import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ButtonZone from './UI/ButtonZone.js';
import PlayerZone from './UI/PlayerZone.js';
import BoardZone from './UI/BoardZone.js'
import { Provider } from 'react-redux'
import App2 from './App2.js'
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
     <App2 />,
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
