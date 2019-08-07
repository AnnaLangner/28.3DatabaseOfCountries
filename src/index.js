import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory } from "react-router";
import { Provider } from 'react-redux';
import store from './store';
import Navigation from './presentional/navigation.component';

render(
  <Provider store={store}>
      <Router history={hashHistory}>
          <Route path={'/'} component={Navigation}/>
      </Router>
  </Provider>,
  document.getElementById('root')
);
