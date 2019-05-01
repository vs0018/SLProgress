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
    alignItems: 'baseline',
    alignContent: 'center'
  },
  select: {
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    minWidth: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class AddClient extends Component {
  state = {
    redirect: false
  }
  
  saveClient = async (newClient) => {
    const token = await this.props.auth.getAccessToken();
    API.saveClient(token, newClient)
      .then(() => this.setState({ redirect: true }))
      .catch(err => console.log(err));
  }

  render() {
    const { classes, client } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/clients" />;
    }
    return (
      <Fragment>
        <Typography variant="display1">Add New Client</Typography>
        <Form 
            onSubmit={this.saveClient}
          >
            {({ handleSubmit }) => (
              <form className={classes.formContainer} onSubmit={handleSubmit}>
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