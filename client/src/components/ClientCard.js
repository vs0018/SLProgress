import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles,
  Typography,
  Grid,
  Paper,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardHeader
} from '@material-ui/core';
import BinaryButton from "../components/BinaryButton";
import API from "../utils/API";

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function ClientCard(props) {
  const { classes, theme, client } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {client.firstName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {client.lastName}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <BinaryButton />
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        // image="/public/avatar-1577909_1280.png"
        title="Client Image"
      />
    </Card>
  );
}

ClientCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ClientCard);