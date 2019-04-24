import React, { Component, Fragment } from 'react';
import {
  withStyles,
  Button,
  Typography
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import AddGoal from './AddGoal'

const styles = theme => ({
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
});

const ClientProfile = ({ classes, client, history }) => (
  <Fragment>
      <Typography variant="display1">{client.firstName}'s Page</Typography>
  </Fragment>
);

export default compose(
  withRouter,
  withStyles(styles),
)(ClientProfile);