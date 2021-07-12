import React from 'react';
import { render } from 'react-dom';
import './sass/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
