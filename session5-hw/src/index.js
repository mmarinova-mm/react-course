import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createReduxStore from './utils/createReduxStore';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
