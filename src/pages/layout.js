import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { UserContext } from '../contexts/user'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../firebase/firebase'
// import firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firebase-database';
// import 'firebase/firebase-firestore';
// import 'firebase/firebase-functions';
// import 'firebase/messaging';
// import 'firebase/firebase-storage';

import MenuAppBar from '../components/menuappbar';
import Qrcode from '../components/qrcode';

const styles = theme => ({
    //   root: {
    //     textAlign: 'center',
    //     paddingTop: theme.spacing.unit * 20,
    //   },
});

class Layout extends React.Component {
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
                this.handleLogout(user);
            }
            console.log("public:" + process.env.PUBLIC_URL);
        });

    }

    state = {
    };

    handleLogin = (user) => { this.setState({ user }); }
    handleLogout = (user) => { this.setState({ user: null }); }
    // uiConfigPlus = {
    //   ...uiConfig, callbacks: {
    //     }
    //   }
    // };


    render() {
        const { classes } = this.props;

        return (
            <>
                <UserContext.Provider value={this.state.user}>
                    <MenuAppBar />
                    {
                        !!this.state.user || <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    }
                    <Qrcode />
                </UserContext.Provider>
            </>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
