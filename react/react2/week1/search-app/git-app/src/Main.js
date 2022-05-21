import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import UsreRepo from './components/UserRepo';

export default function index() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/user/:id">
            <UsreRepo></UsreRepo>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
