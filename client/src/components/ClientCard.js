import React from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardActions,
  Modal,
  Button,
  TextField,
} from '@material-ui/core';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: 500,
  },
  modalCardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: 2 * theme.spacing.unit,
  },
});

const ClientCard = ({ classes, client, history }) => (
  <Modal
    className={classes.modal}
    onClose={() => history.goBack()}
    open
  >
    <Card className={classes.modalCard}>
        <CardContent className={classes.modalCardContent}>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => history.goBack()}>Back</Button>
        </CardActions>
    </Card>
  </Modal>
);

export default compose(
  withRouter,
  withStyles(styles),
)(ClientCard);