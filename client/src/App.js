import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import ClientManager from './pages/ClientManager';
import ClientProfile from './pages/ClientProfile';
import AddClient from './pages/AddClient';
import SessionDash from './pages/SessionDash';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <SecureRoute exact path="/clients" component={ClientManager} />
      <SecureRoute exact path="/clients/:id" component={ClientProfile} />
      <SecureRoute exact path="/clients/add" component={AddClient} />
      <SecureRoute exact path="/session" component={SessionDash} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);