import React, { useEffect, Suspense, lazy } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'
import { DrawerContext } from '../contexts/drawer'
import { SnackbarContext } from '../contexts/snackbar'

import firebase from '../firebase/firebase'

import Main from './main'
import itemDetail from './itemDetail'
import Settings from './settings'
import SwipeableTemporaryDrawer from '../components/SwipeableTemporaryDrawer'
import MenuAppBar from '../components/menuappbar';
import SimpleSnackBar from '../components/snackbar';
import ButtomNavigation from '../components/bottomNavigation';
import { ItemsContext, getItems } from '../contexts/items';
import { ItemDetailsContext, getItemDetails } from '../contexts/itemDetails';

import Dialog from '@material-ui/core/Dialog';
import FormDialog from '../components/FormDialog';

// see https://github.com/facebook/create-react-app/issues/3722
// import Markdown from '../components/Markdown';
// const Markdown = lazy(() => import('../components/Markdown'));   // 直接URLOK。Drawerからの遷移NGのため様子見
// import raw from "raw.macro";
// const raw  = lazy(() => import(raw.macro));
const PrivacyMd = lazy(() => import('./PrivacyMd'));
const TermsMd = lazy(() => import('./TermsMd'));
const HelpMd = lazy(() => import('./HelpMd'));

// const Privacy = lazy(() => import('./privacy'));
// const Terms = lazy(() => import('./terms'));

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
    markdown: {
        padding: `${theme.spacing.unit * 3}px 0`,
        // for buttom navigation.
        marginBottom: theme.spacing.unit * 6,
    },
});

// const markdownReder = (md, classes) => <Markdown className={classes.markdown}>{md}</Markdown>;
// const helpReder = (classes) => markdownReder(raw('../articles/help.md'), classes);
// const privacyReder = (classes) => markdownReder(raw('../articles/privacy.md'), classes);
// const termsReder = (classes) => markdownReder(raw('../articles/terms.md'), classes);

function Layout(props) {

    const [system] = React.useState({
        login: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(result => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const token = result.credential.accessToken;
                // // The signed-in user info.
                // const user = result.user;
                // // ...
            }).catch(error => {
                // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // const credential = error.credential;
                // // ...
            });
        },
        logout: () => {
            // TODO ()=>にするかでthisの違い
            // firebase.auth().signOut().then(function() {
            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                // this.props.system.updateSnackbarMessage("メニューからログアウトを実行。");
            }).catch(function (error) {
                // An error happened.
            });
        },
    });

    const [drawer, setDrawer] = React.useState({
        drawerOpen: false,
        openDrawer: () => setDrawer(prev => ({ ...prev, drawerOpen: true })),
        closeDrawer: () => setDrawer(prev => ({ ...prev, drawerOpen: false })),
    });
    const [snackbar, setSnackbar] = React.useState({
        snackbarMessage: "",
        updateSnackbarMessage: message => setSnackbar(prev => ({ ...prev, snackbarMessage: message })),
    });

    const errorSnackbar = () => snackbar.updateSnackbarMessage('データ取得の失敗により、前回データを表示しています。一度リロードしてみてください。');

    const [items, setItems] = React.useState({
        items: [],
        timestamp: 0,
        getItemsAsync: async () => {
            console.log("getItems start");
            const { items, timestamp } = await getItems(errorSnackbar);
            setItems(prev => ({ getItemsAsync: prev.getItemsAsync, items, timestamp }));
        }
    });
    useEffect(() => {
        items.getItemsAsync();
    }, []);

    const [itemDetails, setItemDetails] = React.useState({
        itemDetails: [],
        timestamp: 0,
        getItemDetailsAsync: async () => {
            console.log("getItemDetails start");
            const { itemDetails, timestamp } = await getItemDetails(errorSnackbar);
            setItemDetails(prev => ({ getItemDetailsAsync: prev.getItemDetailsAsync, itemDetails, timestamp }));
        }
    });
    // 詳細画面でボタン押下時に取得する
    // useEffect(() => {
    //     itemDetails.getItemDetailsAsync();
    // }, []);

    const [user, setUser] = React.useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("onAuthStateChanged user:", user);
            if (user) {
                // User is signed in.
                // const {
                //     displayName,
                //     email,
                //     emailVerified,
                //     photoURL,
                //     isAnonymous,
                //     uid,
                //     providerData,
                // } = user;
                setUser(user);
                // TODO しばらくログインは封印
                // snackbar.updateSnackbarMessage("ログインしました");
            } else {
                setUser(user);
                // TODO しばらくログインは封印
                // snackbar.updateSnackbarMessage("ログアウトしました");
            }
        });
    }, []);

    const { classes } = props;
    console.log("render() layout");
    // console.log("render() layout system:", system);
    // console.log("render() layout drawer:", drawer);
    // console.log("render() layout snackbar:", snackbar);
    // console.log("render() layout user:", user);

    // TODO フィードバック送信の暫定実装
    const [open, setOpen] = React.useState(false);
    const handleFeedback = () => {
        setOpen(true);
    }

    return (
        <Router>
            <SystemContext.Provider value={system}>
                <SnackbarContext.Provider value={snackbar}>
                    <UserContext.Provider value={user}>
                        <DrawerContext.Provider value={drawer}>
                            <SwipeableTemporaryDrawer handleFeedback={handleFeedback} />
                            <MenuAppBar />
                        </DrawerContext.Provider>
                        <div className={classes.appBarSpacer} />
                        <ItemsContext.Provider value={items}>
                            <ItemDetailsContext.Provider value={itemDetails}>
                                {/* suspense must not contain a drawer. */}
                                {/* see: https://github.com/mui-org/material-ui/issues/14319 */}
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Switch>
                                        {/* <Route exact path="/" component={Main} /> */}
                                        <Route path="/items/:id" component={itemDetail} />
                                        <Route path="/itemgroups/:group" component={Main} />
                                        <Route path="/settings" component={Settings} />
                                        <Route path="/privacy" component={PrivacyMd} />
                                        <Route path="/terms" component={TermsMd} />
                                        <Route path="/help" component={HelpMd} />
                                        {/* <Route path="/privacy" component={Privacy} />
                                        <Route path="/terms" component={Terms} /> */}
                                        {/* <Route path="/privacy" render={props => privacyReder(classes)} /> */}
                                        {/* <Route path="/terms" render={props => termsReder(classes)} /> */}
                                        {/* <Route path="/help" render={props => helpReder(classes)} */}
                                        {/* // render={props => <Markdown {...props}>{HelpMd}</Markdown>}
                                    // render={props => <Markdown {...props} extra={someVariable} />} */}
                                        {/* /> */}
                                        <Route component={Main} />
                                    </Switch>
                                </Suspense>
                            </ItemDetailsContext.Provider>
                        </ItemsContext.Provider>
                        <ButtomNavigation />
                        <SimpleSnackBar />
                        {/* // TODO しばらく暫定実装 */}
                        <Dialog open={open}>
                            <FormDialog open={open} setOpen={setOpen} />
                        </Dialog>
                    </UserContext.Provider>
                </SnackbarContext.Provider>
            </SystemContext.Provider>
        </Router>
    );
}

export default withStyles(styles)(Layout);
