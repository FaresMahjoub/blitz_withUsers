import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import store from "../imports/redux/store";
import * as serviceWorker from '../imports/serviceWorker';
import PlayPage from '../imports/PlayPage.js';
import {Provider} from "react-redux";
import '../imports/startup/accounts-config.js';


Meteor.startup(() => {
  ReactDOM.render(
      <Provider store={store}>
      <PlayPage />
      </Provider>,
      document.getElementById('root')

  );
});
serviceWorker.unregister();
