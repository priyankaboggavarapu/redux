import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { RootConfig } from './router';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <RootConfig />
  </Provider>,
  document.getElementById('root'),
);
