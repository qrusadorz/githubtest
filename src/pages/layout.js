import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from '../firebase/firebase'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

    // footer: {
    //     backgroundColor: theme.palette.background.paper,
    //     padding: theme.spacing.unit * 6,
    // },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['プライバシー', '利用規約'],
    },
  ];

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
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        {
                            !!this.state.user || <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                        }
                        <Typography variant="h4" gutterBottom component="h2">
                            Orders
                        </Typography>
                        <AlignItemsList />
                        {/* <Qrcode /> */}
                        <SimpleSnackBar />
                        {/* mainから出したいがスクロール問題でNG */}
                        {/* Footer */}
                        {/* <footer className={classes.footer}>
                            <Typography variant="h6" align="center" gutterBottom>
                                Footer
                            </Typography>
                            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                                Something here to give the footer a purpose!
                            </Typography>
                        </footer> */}
                        {/* End footer */}
                        {/* Footer */}
                        <footer className={classNames(classes.footer, classes.layout)}>
                            <Grid container spacing={32} justify="space-evenly">
                            {footers.map(footer => (
                                <Grid item xs key={footer.title}>
                                <Typography variant="h6" color="textPrimary" gutterBottom>
                                    {footer.title}
                                </Typography>
                                {footer.description.map(item => (
                                    <Typography key={item} variant="subtitle1" color="textSecondary">
                                    {item}
                                    </Typography>
                                ))}
                                </Grid>
                            ))}
                            </Grid>
                        </footer>
                        {/* End footer */}
                    </main>
                </UserContext.Provider>
            </SystemContext.Provider>
        );
    }
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Layout));
