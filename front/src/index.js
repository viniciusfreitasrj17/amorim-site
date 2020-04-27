import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './views/Home'
import Page1 from './views/Page1';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={() => (<h1>page2</h1>)} />
      <Route path='/page3' component={() => (<h1>page3</h1>)} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
