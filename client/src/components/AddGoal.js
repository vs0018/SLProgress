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

  saveGoal = async (client) => {
    const token = await this.props.auth.getAccessToken();
    API.saveGoal(token, client.id)
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
          <Form onSubmit={this.saveGoal}>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>

    );
  }
}

AddGoal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddGoal);