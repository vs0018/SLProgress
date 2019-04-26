import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Button,
  Typography
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { compose } from 'recompose';
import { withRouter, Link, Route, Redirect } from 'react-router-dom';
import API from "../utils/API";
import AddGoal from '../components/AddGoal'

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

class ClientProfile extends Component {
  state = {
    client: {},
    goals: {}
  };

  // When this component mounts, grab the client with the _id of this.props.match.params.id
  async componentDidMount() {
    const token = await this.props.auth.getAccessToken();
    API.getOneClient(token, this.props.match.params.id)
      .then(res => this.setState({ client: res.data }))
      .catch(err => console.log(err));
  }

  saveGoal = async (client) => {
    const token = await this.props.auth.getAccessToken();
    API.saveGoal(token, client.id)
      .catch(err => console.log(err));
  }

  renderAddGoal = () => {
    return <AddGoal client={this.state.client} onSave={this.saveGoal} state={true} />;
  };

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
          onClick={this.renderAddGoal}
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