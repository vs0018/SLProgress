import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { 
  withStyles,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
 } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  }
});

class GoalPanel extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes, goal, index } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel expanded={expanded === `panel1`} onChange={this.handleChange(`panel1`)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Goal #{index + 1}</Typography>
          <Typography className={classes.secondaryHeading}>{goal.goalType}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.column}>
            <Typography>
              {goal.desc}
            </Typography>
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography>
              Goal accuracy: {goal.accuracy}%
            </Typography>
            <Typography>
              Current accuracy: %
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

GoalPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(GoalPanel);