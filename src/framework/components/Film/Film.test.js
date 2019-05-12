import React from 'react';
import ReactDOM from 'react-dom';
import Film from './Film';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Film />, div);
  ReactDOM.unmountComponentAtNode(div);
});
