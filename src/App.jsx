import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enableBatching } from 'redux-batched-actions';

import { rootReducer } from './reducers/reducers';

// to be removed
import initialState from './dummy-state.json';

import { Menu } from './components/Menu';
import { Main } from './components/Main';

import './styles/app.scss';
import './styles/components.scss';

const App = () => (
  <div className="main-container">
    <Menu />
    <Main/>
  </div>
);

const store = createStore(
  enableBatching(rootReducer),
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
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
