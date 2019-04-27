import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Typography,
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import API from "../utils/API";
import GoalPanel from "../components/GoalPanel"
import AddGoal from "../components/AddGoal"

const styles = theme => ({
  root: {
    width: '100%',
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
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

  render() {
    const { classes } = this.props;

    return (
    <Fragment>
        <Typography variant="display1">{this.state.client.firstName}'s Page</Typography>
          {this.state.goals.length ? (
            <div className={classes.root}>
              {this.state.goals.map(goal => (
                <GoalPanel goal={goal} />
              ))}
            </div>
          ) : (
            <div className={classes.root}>
              <AddGoal />
            </div>
          )}
    </ Fragment>
    );
  }
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(ClientProfile);