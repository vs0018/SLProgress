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
                  name="goalType"
                  label="Select Goal Type"
                  formControlProps={{className: classes.select}}
                  component={Select}
                >
                  <MenuItem value="Receptive">
                      Receptive
                  </MenuItem>
                  
                  <MenuItem value="Expressive">
                      Expressive
                  </MenuItem>
                </Field>
                <Field
                  name="desc"
                  type="text"
                  className={classes.textField}
                  component={TextField}
                  label="Goal Description"
                  fullWidth
                  margin="normal"
                />
                <Field
                  name="accuracy"
                  label="Select Accuracy"
                  formControlProps={{className: classes.select}}
                  component={Select}
                >
                  <MenuItem value={50}>
                      50%
                  </MenuItem>
                  
                  <MenuItem value={80}>
                      80%
                  </MenuItem>

                  <MenuItem value={100}>
                      100%
                  </MenuItem>
                </Field>
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