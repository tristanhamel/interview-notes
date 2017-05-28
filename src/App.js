import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

import { Menu } from './components/Menu';
import { Main } from './components/Main';

const App = () => (
  <div className="main-container">
    <Menu />
    <Main/>
  </div>
);

const store = createStore(
  rootReducer,
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
