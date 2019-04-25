import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  withStyles,
  Button,
  Typography
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import API from "../utils/API";
import AddGoal from './AddGoal'

const styles = theme => ({
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
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
    </Fragment>
    );
  }
};

export default compose(
  withAuth,
  withRouter,
  withStyles(styles),
)(ClientProfile);