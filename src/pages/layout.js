import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../firebase/firebase'

import Typography from '@material-ui/core/Typography';

import MenuAppBar from '../components/menuappbar';
import SnackBar from '../components/snackbar';
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
                this.updateSnackbarMessage("ログインしました");
            } else {
                // User is signed out.
                console.log("★★ User is signed out.");
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
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Typography variant="h4" gutterBottom component="h2">
                            Orders
                        </Typography>
                        <AlignItemsList />
                    </main>
                    {/* <Qrcode /> */}
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
