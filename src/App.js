import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Main } from './components/Main';

const App = () => (
  <div className="main-container">
    <Menu />
    <Main/>
  </div>
);

ReactDOM.render((
  <HashRouter>
    <App />
   </HashRouter>
  ),document.getElementById('app')
);
