import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Button,
  IconButton,
  Typography
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import API from "../utils/API";
import AddGoal from './AddGoal'

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
  },
});

class ClientProfile extends Component {
  state = {
    client: {}
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  async componentDidMount() {
    const token = await this.props.auth.getAccessToken();
    API.getOneClient(token, this.props.match.params.id)
      .then(res => this.setState({ client: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    return (
    <Fragment>
        <Typography variant="display1">{this.state.client.firstName}'s Page</Typography>
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/clients/addgoal"
        >
          <AddIcon />
        </Button>
    </Fragment>
    );
  }
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(ClientProfile);