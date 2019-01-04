import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'

import firebase from '../firebase/firebase'

import Main from './main'
import Privacy from './privacy'
import Terms from './terms'
import itemDetail from './itemDetail'
import ScrollToTop from '../components/scrollToTop'
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
                login: this.handleLoginButton,
                logout: this.handleLogoutButton,
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
            console.log("user:", user);
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
    handleLoginButton = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch(error => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
          });
    }

    handleLogoutButton = () => {
        // TODO ()=>にするかでthisの違い
        // firebase.auth().signOut().then(function() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            // this.props.system.updateSnackbarMessage("メニューからログアウトを実行。");
          }).catch(function (error) {
            // An error happened.
          });      
    }

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
    }

    closeDrawer = () => {
        this.setState({
            system: {
                ...this.state.system,
                drawerOpen: false,
            }
        });
    }

    render() {
        const { classes } = this.props;
        console.log("render layout user:", this.state.user);

        return (
            <Router>
                <ScrollToTop>
                    <SystemContext.Provider value={this.state.system}>
                        <UserContext.Provider value={this.state.user}>
                            <SwipeableTemporaryDrawer />
                            <MenuAppBar />
                            <div className={classes.appBarSpacer} />
                                <Switch>
                                    {/* <Route exact path="/" component={Main} /> */}
                                    <Route path="/items/:id" component={itemDetail} />
                                    <Route path="/privacy" component={Privacy} />
                                    <Route path="/terms" component={Terms} />
                                    <Route component={Main} />
                                    {/* <Main className={classes.content} /> */}
                                </Switch>
                        </UserContext.Provider>
                    </SystemContext.Provider>
                </ScrollToTop>
            </Router>
        );
    }
}
  
Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
