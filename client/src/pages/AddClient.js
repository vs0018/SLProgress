import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Button,
  Typography,
  Paper,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select, Input } from 'final-form-material-ui';
import API from "../utils/API";

const styles = theme => ({
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  }
});

class AddClient extends Component {

  saveClient = async (newClient) => {
    const token = await this.props.auth.getAccessToken();
    API.saveClient(token, newClient)
      .catch(err => console.log(err));
  }

  render() {

    return (
      <Fragment>
        <Typography variant="display1">Add New Client</Typography>
        <Form onSubmit={this.saveClient}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                name="domain"
                type="text"
                component={TextField}
                label="Domain"
                margin="normal"
                fullWidth
                />
                <Field 
                name="password"
                component={Input}
                className="input"
                type="password"
                placeholder="Password"
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