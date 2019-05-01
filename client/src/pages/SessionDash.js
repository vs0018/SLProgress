import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  withStyles,
  Grid,
  Paper,
  Divider
} from '@material-ui/core';
import BinaryButton from "../components/BinaryButton";
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
    clients: [],
  };

  async componentDidMount() {
    const token = await this.props.auth.getAccessToken();
    API.getSessionClients(token)
      .then(res => {
        this.setState({ client: res.data });
         return API.getAllGoals(token, this.state.client.id);
        })
      .then(res => this.setState({ goals: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={16}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} >
                  <Divider />
                  <BinaryButton />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>  
    );
  }
}

SessionDash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SessionDash);