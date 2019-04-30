import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Button,
  Paper,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select, Input } from 'final-form-material-ui';
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


class AddGoal extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  saveGoal = async (goal) => {
    const token = await this.props.auth.getAccessToken();
    const client = await this.props.client.id;
    console.log(goal, client);
    API.saveGoal(token, goal)
      .catch(err => console.log(err));
  }

  render() {
    const { classes, client } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel expanded={expanded === 'addPanel'} onChange={this.handleChange('addPanel')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Add New Goal</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Form 
            onSubmit={this.saveGoal}
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
        </ExpansionPanelDetails>
      </ExpansionPanel>

    );
  }
}

AddGoal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(AddGoal);