import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import API from "../utils/API";

const styles = theme => ({
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: 3 * theme.spacing.unit,
    right: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      bottom: 2 * theme.spacing.unit,
      right: 2 * theme.spacing.unit,
    },
  }
});

class AddClient extends Component {
  state = {
    client: {}
  };

  saveClient = async (client) => {
    const token = await this.props.auth.getAccessToken();
    API.saveClient(token, client.id)
      .catch(err => console.log(err));
    this.props.history.goBack();
    this.loadClients();
  }

  render() {
    const { classes, history } = this.props;

    return (
      <Fragment>
        <Typography variant="display1">Add New Client</Typography>
        <Form onSubmit={this.saveClient}>
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
  }
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(AddClient);