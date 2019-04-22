import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import { withRouter, Route, Redirect, Link } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Button,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import { find, orderBy } from 'lodash';
import { compose } from 'recompose';
import API from "../utils/API"; 
import ClientReport from '../components/ClientReport';

const styles = theme => ({
  posts: {
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
  };

 componentDidMount() {
    this.loadClients(); 
  }

  async loadClients() {
    const token = await this.props.auth.getAccessToken();
    API.getAllClients(token)
      .then(res => {
        console.log(res);
        this.setState({loading: false, clients: res.data});
      });
  };


  async deleteClient(client) {
    const token = await this.props.auth.getAccessToken();
    if (window.confirm(`Are you sure you want to delete "${client.firstName}"'s profile`)) {
        API.deleteClient(token, client.id)
        .then(res => {
          this.loadClients();
        });
    }
  }

  renderClientReport = ({ match: { params: { id } } }) => {
    if (this.state.loading) return null;
    const client = find(this.state.clients, { id: Number(id) });

    if (!client && id !== 'new') return <Redirect to="/clients" />;

    return <ClientReport client={client} />;
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Typography variant="display1">Client Manager</Typography>
        {this.state.clients.length > 0 ? (
          <Paper elevation={1} className={classes.clients}>
            <List>
              {orderBy(this.state.clients, ['updatedAt'], ['desc', 'asc']).map(client => (
                <ListItem key={client.id} button component={Link} to={`/clients/${client.id}`}>
                  <ListItemText
                    primary={client.lastName}
                    secondary={client.firstName}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.deleteClient(client)} color="inherit">
                      <DeleteIcon />
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
          to="/clients/new"
        >
          <AddIcon />
        </Button>
        <Route exact path="/clients/:id" render={this.renderClientReport} />
      </Fragment>
    );
  }
}

  export default compose(
    withAuth,
    withRouter,
    withStyles(styles),
  )(ClientManager);