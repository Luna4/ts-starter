import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { App } from './app';
import { UserListContainer } from './containers/user-list-container';
import { NotFound } from './components/src/not-found/not-found';
import { Header } from './components/src/header/header';

const history = createBrowserHistory();

export const Root = () => (
  <App>
    <Header />
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={UserListContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </App>
);

render(<Root />, document.getElementById('root'));