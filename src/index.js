import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import {Provider} from 'react-redux';
import {Counter} from './features/counter/counter'



ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

