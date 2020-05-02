import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Pomodoro from './containers/Pomodoro';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.POMODORO} component={Pomodoro} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
