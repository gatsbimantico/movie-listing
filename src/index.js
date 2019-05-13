import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import initialStore from './business-logic/initial-store';
import App from './site/routes';
import configureStore from './site/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={configureStore(initialStore)}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
