import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './views/Home'
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';
import PageX from './views/PageX';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
      <Route path='/page3' component={Page3} />
      <Route path='/page4' component={Page4} />
      <Route path='/pagex' component={PageX} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
