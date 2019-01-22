import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import store from "../imports/redux/store";
import * as serviceWorker from '../imports/serviceWorker';
import App2 from '../imports/App2.js';
import {Provider} from "react-redux";
//import '../imports/startup/accounts-config.js';


Meteor.startup(() => {
  ReactDOM.render(
      <Provider store={store}>
      <App2 />
      </Provider>,
      document.getElementById('root')

  );
});
serviceWorker.unregister();
