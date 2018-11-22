import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../firebase/firebase'

import MenuAppBar from '../components/menuappbar';
import SnackBar from '../components/snackbar';
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

        this.state = {
            system: {
                snackbarMessage: "",
                updateSnackbarMessage: this.updateSnackbarMessage,
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
                console.log("★★ User is signed in:", user);
                this.handleLogin(user);
                this.state.system.updateSnackbarMessage("ログインしました");
            } else {
                // User is signed out.
                console.log("★★ User is signed out.");
                this.handleLogout(user);
                this.state.system.updateSnackbarMessage("ログアウトしました");
            }
            console.log("public:" + process.env.PUBLIC_URL);
        });
    }

    // state = {
    //     system: {
    //         snackbarMessage: "",
    //         updateSnackbarMessage: this.updateSnackbarMessage,
    //     },
    // };

    handleLogin = (user) => { this.setState({ user }); }
    handleLogout = () => { this.setState({ user: null }); }
    // uiConfigPlus = {
    //   ...uiConfig, callbacks: {
    //     }
    //   }
    // };
    updateSnackbarMessage = message => {
        this.setState({
            system: {
                ...this.state.system,
                snackbarMessage: message,
            }
        });
    }

    render() {
        const { classes } = this.props;

        console.log("★★ redraw for snackbar :", this.state.system);
        return (
            <SystemContext.Provider value={this.state.system}>
                <UserContext.Provider value={this.state.user}>
                    <MenuAppBar />
                    {
                        !!this.state.user || <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    }
                    <Qrcode />
                    <SnackBar message={this.state.system.snackbarMessage} />
                </UserContext.Provider>
            </SystemContext.Provider>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
