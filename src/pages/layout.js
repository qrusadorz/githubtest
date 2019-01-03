import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../firebase/firebase'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Main from './main'
import SwipeableTemporaryDrawer from '../components/SwipeableTemporaryDrawer'
import MenuAppBar from '../components/menuappbar';
import SimpleSnackBar from '../components/snackbar';
import AlignItemsList from '../components/itemsList';
import Qrcode from '../components/qrcode';

const styles = theme => ({
    //   root: {
    //     textAlign: 'center',
    //     paddingTop: theme.spacing.unit * 20,
    //   },

    // TODO original test
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
});

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            system: {
                snackbarMessage: "",
                updateSnackbarMessage: this.updateSnackbarMessage,
                drawerOpen: false,
                openDrawer: this.openDrawer,
                closeDrawer: this.closeDrawer,
            },
        };

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
                this.handleLogin(user);
                this.updateSnackbarMessage("ログインしました");
            } else {
                this.handleLogout(user);
                this.updateSnackbarMessage("ログアウトしました");
            }
            console.log("public:" + process.env.PUBLIC_URL);
        });
    }

    // TODO コンストラクタの時はstate = {}はNG？
    // state = {
    //     system: {
    //         snackbarMessage: "",
    //         updateSnackbarMessage: this.updateSnackbarMessage,
    //     },
    // };

    handleLogin = (user) => { this.setState({ user }); }
    handleLogout = () => { this.setState({ user: null }); }
    updateSnackbarMessage = message => {
        this.setState({
            system: {
                ...this.state.system,
                snackbarMessage: message,
            }
        });
    }

    openDrawer = () => {
        this.setState({
            system: {
                ...this.state.system,
                drawerOpen: true,
            }
        });
        console.log("openDrawer");
    }

    closeDrawer = () => {
        this.setState({
            system: {
                ...this.state.system,
                drawerOpen: false,
            }
        });
        console.log("closeDrawer");
    }

    render() {
        const { classes } = this.props;

        return (
            <SystemContext.Provider value={this.state.system}>
                <UserContext.Provider value={this.state.user}>
                    <SwipeableTemporaryDrawer />
                    <MenuAppBar />
                    <div className={classes.appBarSpacer} />
                    <Main className={classes.content} />
                </UserContext.Provider>
            </SystemContext.Provider>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
