import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import PropTypes from 'prop-types';
import { 
  withStyles,
  Typography,
  Grid,
  Paper,
  Divider
} from '@material-ui/core';
import ClientCard from "../components/ClientCard";
import { orderBy } from 'lodash';
import { compose } from 'recompose';
import API from "../utils/API";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class SessionDash extends Component {
  state = {
    clients: []
  };

  async componentDidMount() {
    this.loadClients();
  }

  async loadClients() {
    const token = await this.props.auth.getAccessToken();
    API.getSessionClients(token)
      .then(res => {
        console.log(res);
        this.setState({clients: res.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          {this.state.clients.length > 0 ? (
          <Grid container className={classes.demo} justify="center" spacing={16}>
            {orderBy(this.state.clients, ['lastName']).map(client => (
              <Grid key={client.id} item>
                <ClientCard client={client}/>
                {/* <Paper className={classes.paper} >
                  <Divider />
                  <BinaryButton />
                </Paper> */}
              </Grid>
        ))}
          </Grid>
      ) : (
          <Typography variant="subheading">No clients to display</Typography>
        )}
        </Grid>
      </Grid>  
    );
  }
}

SessionDash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withAuth,
  withStyles(styles),
)(SessionDash);