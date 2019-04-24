import React, { Component, Fragment } from 'react';
import {
  withStyles,
  Button,
  Typography
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const styles = theme => ({
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
});

const AddClient = ({ classes, onSave, history }) => (
  <Fragment>
      <Typography variant="display1">Add New Client</Typography>
  </Fragment>
);

export default compose(
  withRouter,
  withStyles(styles),
)(AddClient);