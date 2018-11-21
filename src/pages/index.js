import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
// import firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firebase-database';
// import 'firebase/firebase-firestore';
// import 'firebase/firebase-functions';
// import 'firebase/messaging';
// import 'firebase/firebase-storage';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../firebase/firebase'

import { UserContext } from '../contexts/user'
import Qrcode from '../components/qrcode';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const {
          displayName,
          email,
          emailVerified,
          photoURL,
          isAnonymous,
          uid,
          providerData,
        } = user;
        console.log("★★ User is signed in:", user);
        this.handleLogin(user);
      } else {
        // User is signed out.
        console.log("★★ User is signed out.");
      }
      console.log("public:" + process.env.PUBLIC_URL);
    });

  }

  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleLogin = (user) => { this.setState({ user }); }
  // uiConfigPlus = {
  //   ...uiConfig, callbacks: {
  //     }
  //   }
  // };

  render() {
    const { classes } = this.props;

    return (
      <UserContext.Provider value={this.state.user}>
        <div className={classes.root}>
          {
            this.state.auth || <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          }
          <Qrcode />
          {/* <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="h4" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            example project
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
            Super Secret Password
          </Button> */}
        </div>
      </UserContext.Provider>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
