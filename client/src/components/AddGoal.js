import React, { Component, Fragment } from 'react';
import {
  withStyles,
  TextField,
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

const AddGoal = ({ classes, onSave, history }) => (
  <Fragment>
    <Typography variant="display1">Add New Client</Typography>
    <Form onSubmit={onSave}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="First Name">
            {({ input }) => <TextField label="firstName" autoFocus {...input} />}
          </Field>
          <Field name="body">
            {({ input }) => (
              <TextField
                className={classes.marginTop}
                label="Body"
                multiline
                rows={4}
                {...input}
              />
            )}
          </Field>
          <Button size="small" color="primary" type="submit">Save</Button>
          <Button size="small" onClick={() => history.goBack()}>Cancel</Button>
        </form>
        )}
      </Form>
  </Fragment>
);

export default compose(
  withRouter,
  withStyles(styles),
)(AddGoal);