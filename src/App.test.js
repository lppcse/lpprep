import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import App from './Disp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Disp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
