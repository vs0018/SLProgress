import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Button,
  Typography,
  MenuItem
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter, Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Select } from 'final-form-material-ui';
import API from "../utils/API";

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  select: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class AddClient extends Component {

  saveClient = async (newClient) => {
    const token = await this.props.auth.getAccessToken();
    API.saveClient(token, newClient)
      .then(res => {
        return <Redirect to="/clients" />
      })
      .catch(err => console.log(err));
  }

  render() {
    const { classes, client } = this.props;

    return (
      <Fragment>
        <Typography variant="display1">Add New Client</Typography>
        <Form 
            onSubmit={this.saveClient}
            className={classes.formContainer}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  type="text"
                  className={classes.textField}
                  component={TextField}
                  label="First Name"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="lastName"
                  type="text"
                  className={classes.textField}
                  component={TextField}
                  label="Last Name"
                  fullWidth
                  margin="normal"
                />
                <Button size="small" color="primary" type="submit">Save</Button>
                <Button size="small">Cancel</Button>
              </form>
              )}
          </Form>
      </Fragment>
    );
  }
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(AddClient);