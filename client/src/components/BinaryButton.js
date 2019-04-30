import React from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles,
  Button,
  IconButton
} from '@material-ui/core';
import {
  CheckCircleOutline as CheckIcon,
  HighlightOff as XIcon
} from '@material-ui/icons';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function BinaryButton(props) {
  const { classes } = props;
  return (
      <div>
        <IconButton aria-label="Correct" className={classes.margin}>
          <CheckIcon color="primary" className={classes.button} />
        </IconButton>
        <IconButton aria-label="Correct" className={classes.margin}>
          <XIcon color="error" className={classes.button} />
        </IconButton>
      </div>
  );
}

BinaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BinaryButton);