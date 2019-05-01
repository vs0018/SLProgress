import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Typography,
  Button,
  IconButton,
  Fab
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { compose } from 'recompose';
import { withRouter, Redirect } from 'react-router-dom';
import API from "../utils/API";
import GoalPanel from "../components/GoalPanel"
import AddGoal from "../components/AddGoal"

const styles = theme => ({
  root: {
    width: '100%',
  },
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
      .then(res => {
        this.setState({ client: res.data });
         return API.getAllGoals(token, this.state.client.id);
        })
      .then(res => this.setState({ goals: res.data }))
      .catch(err => console.log(err));
  }

  async deleteClient(client) {
    const token = await this.props.auth.getAccessToken();
    if (window.confirm(`Are you sure you want to delete ${client.firstName}'s profile`)) {
        API.deleteClient(token, client.id)
        .then(res => {
          return <Redirect to="/clients" />
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { classes } = this.props;

    return (
    <Fragment>
        <Typography variant="display1">{this.state.client.firstName}'s Page</Typography>
          {this.state.goals.length ? (
            <div className={classes.root}>
              {this.state.goals.map((goal, index) => (
                <GoalPanel goal={goal} index={index} classes={classes}/>
              ))}
              <AddGoal client={this.state.client} classes={classes} />
            </div>
          ) : (
            <div className={classes.root}>
              <AddGoal client={this.state.client} classes={classes} />
            </div>
          )}
        <Fab size="small" color="secondary" aria-label="Add" className={classes.fab}>
          <DeleteIcon onClick={() => this.deleteClient(this.state.client)} />
        </Fab>
    </ Fragment>
    );
  }
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(ClientProfile);