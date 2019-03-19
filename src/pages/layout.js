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
import SwipeableTemporaryDrawer from '../components/SwipeableTemporaryDrawer'
import MenuAppBar from '../components/menuappbar';
import SimpleSnackBar from '../components/snackbar';
import ButtomNavigation from '../components/bottomNavigation';
import { ItemsContext, getItems } from '../contexts/items';
import { ItemDetailsContext, getItemDetails } from '../contexts/itemDetails';
const Privacy = lazy(() => import('./privacy'));
const Terms = lazy(() => import('./terms'));

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

    const errorSnackbar = () => snackbar.updateSnackbarMessage('データの取得に失敗しました。ページをリロードしてみてください。');
    
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

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <SystemContext.Provider value={system}>
                    <SnackbarContext.Provider value={snackbar}>
                        <UserContext.Provider value={user}>
                            <DrawerContext.Provider value={drawer}>
                                <SwipeableTemporaryDrawer />
                                <MenuAppBar />
                            </DrawerContext.Provider>
                            <div className={classes.appBarSpacer} />
                            <ItemsContext.Provider value={items}>
                            <ItemDetailsContext.Provider value={itemDetails}>
                                <Switch>
                                    {/* <Route exact path="/" component={Main} /> */}
                                    <Route path="/privacy" component={Privacy} />
                                    <Route path="/terms" component={Terms} />
                                        <Route path="/items/:id" component={itemDetail} />
                                    <Route path="/itemgroups/:group" component={Main} />
                                    <Route component={Main} />
                                </Switch>
                            </ItemDetailsContext.Provider>
                            </ItemsContext.Provider>
                            <ButtomNavigation />
                            <SimpleSnackBar />
                        </UserContext.Provider>
                    </SnackbarContext.Provider>
                </SystemContext.Provider>
            </Suspense>
        </Router>
    );
}

export default withStyles(styles)(Layout);
