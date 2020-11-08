import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';

import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.container}>
      <Router>
        <Switch>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
