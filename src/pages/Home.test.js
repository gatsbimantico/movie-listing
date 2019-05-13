import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import initialStore from '../business-logic/initial-store';

import Home from './Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={createStore((state) => state, initialStore)}>
      <Home />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
