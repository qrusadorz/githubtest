import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'

import firebase, { uiConfig } from '../firebase/firebase'

import Main from './main'
import Privacy from './privacy'
import Terms from './terms'
import SwipeableTemporaryDrawer from '../components/SwipeableTemporaryDrawer'
import MenuAppBar from '../components/menuappbar';

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
            <Router>
                <SystemContext.Provider value={this.state.system}>
                    <UserContext.Provider value={this.state.user}>
                        <SwipeableTemporaryDrawer />
                        <MenuAppBar />
                        <div className={classes.appBarSpacer} />
                            <Switch>
                                {/* <Route exact path="/" component={Main} /> */}
                                <Route path="/privacy" component={Privacy} />
                                <Route path="/terms" component={Terms} />
                                <Route component={Main} />
                                {/* <Main className={classes.content} /> */}
                            </Switch>
                    </UserContext.Provider>
                </SystemContext.Provider>
            </Router>
        );
    }
}
  
Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
