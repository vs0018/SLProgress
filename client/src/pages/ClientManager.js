import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import { withRouter, Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Button,
  IconButton,
  Checkbox,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Add as AddIcon, ShowChart as ChartIcon } from '@material-ui/icons';
import { map, orderBy } from 'lodash';
import { compose } from 'recompose';
import API from "../utils/API";

const styles = theme => ({
  clients: {
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


class ClientManager extends Component {
  state = {
    loading: true,
    clients: [],
    checked: [0]
  };

  async componentDidMount() {
    await this.loadClients()
  };

  async loadClients() {
    const token = await this.props.auth.getAccessToken();
    API.getAllClients(token)
      .then(res => {
        console.log(res);
        this.setState({loading: false, clients: res.data});
      })
      .catch(err => console.log(err));

    API.getSessionClients(token)
    .then(res => {
      var clients = res.data.map(function(client){
        return client.id
      });
      console.log(clients);
      this.setState({checked: clients})
    });
  };


  handleToggle = id => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
      var enroll = true;
    } else {
      newChecked.splice(currentIndex, 1);
      var enroll = false;
    }

    this.enrollSession(id, enroll);

    this.setState({
      checked: newChecked,
    });
  };


  async enrollSession(id, enroll){
    const token = await this.props.auth.getAccessToken();
    
    var clientData = {
      clientId: id,
      inSession: enroll
    }

    API.updateClient(token, clientData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="display1">Client Manager</Typography>
        {this.state.clients.length > 0 ? (
          <Paper elevation={1} className={classes.clients}>
            <List>
              {orderBy(this.state.clients, ['lastName']).map(client => (
                <ListItem key={client.id} button onClick={this.handleToggle(client.id)}>
                <Checkbox
                    checked={this.state.checked.indexOf(client.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText
                    primary={client.lastName}
                    secondary={client.firstName}
                  />
                  <ListItemSecondaryAction>
                    <IconButton component={Link} to={`/clients/${client.id}`} color="inherit" classes={classes} >
                      <ChartIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        ) : (
          !this.state.loading && <Typography variant="subheading">No clients to display</Typography>
        )}
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          component={Link}
          to="/add"
        >
          <AddIcon />
        </Button>
      </Fragment>
    );
  }
}

  export default compose(
    withAuth,
    withRouter,
    withStyles(styles),
  )(ClientManager);