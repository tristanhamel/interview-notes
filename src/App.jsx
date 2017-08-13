import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'whatwg-fetch';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import  thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enableBatching } from 'redux-batched-actions';

import { rootReducer } from './reducers/reducers';

//import initialState from './dummy-state.json';
 import { initialState } from './reducers/initialState';

import { Menu } from './components/Menu';
import { Main } from './components/Main';
import { Modal } from './components/Modal';

import './styles/app.scss';
import './styles/components.scss';

const App = () => (
  <div className="main-container">
    <Menu/>
    <Main/>
    <Modal/>
  </div>
);

const excludedPaths = ['ui'];
const persistedPaths = Object.keys(initialState).filter( k => !excludedPaths.includes(k));

const store = createStore(
  enableBatching(rootReducer),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
    persistState(persistedPaths /*, config*/)
  )
);

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ),document.getElementById('app')
);
