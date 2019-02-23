import React, { useEffect, Suspense, lazy } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import withRoot from '../withRoot';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { UserContext } from '../contexts/user'
import { SystemContext } from '../contexts/system'
import { DrawerContext } from '../contexts/drawer'
import { SnackbarContext } from '../contexts/snackbar'

import firebase from '../firebase/firebase'

import Main from './main'
import itemDetail from './itemDetail'
// import ScrollToTop from '../components/scrollToTop'
import SwipeableTemporaryDrawer from '../components/SwipeableTemporaryDrawer'
import MenuAppBar from '../components/menuappbar';
import SimpleSnackBar from '../components/snackbar';
import { ItemsContext, getItems } from '../contexts/items';
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

// class Layout extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             system: {
//                 login: this.handleLoginButton,
//                 logout: this.handleLogoutButton,
//                 snackbarMessage: "",
//                 updateSnackbarMessage: this.updateSnackbarMessage,
//                 drawerOpen: false,
//                 openDrawer: this.openDrawer,
//                 closeDrawer: this.closeDrawer,
//             },
//             items: {
//                 // TODO 後で初期値見直し
//                 items: [], //items,
//                 getItems: this.handleGetItems,
//             },
//         };

//         console.log("layout constructor");
//         firebase.auth().onAuthStateChanged((user) => {
//             console.log("onAuthStateChanged user:", user);
//             if (user) {
//                 // User is signed in.
//                 // const {
//                 //     displayName,
//                 //     email,
//                 //     emailVerified,
//                 //     photoURL,
//                 //     isAnonymous,
//                 //     uid,
//                 //     providerData,
//                 // } = user;
//                 this.handleLogin(user);
//                 // TODO しばらくログインは封印
//                 // this.updateSnackbarMessage("ログインしました");
//             } else {
//                 this.handleLogout(user);
//                 // TODO しばらくログインは封印
//                 // this.updateSnackbarMessage("ログアウトしました");
//             }
//         });
//     }

//     async componentDidMount() {
//         await this.state.items.getItems();
//     }

//     handleLogin = (user) => { this.setState({ user }); }
//     handleLogout = () => { this.setState({ user: null }); }
//     handleLoginButton = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider).then(result => {
//             // // This gives you a Google Access Token. You can use it to access the Google API.
//             // const token = result.credential.accessToken;
//             // // The signed-in user info.
//             // const user = result.user;
//             // // ...
//         }).catch(error => {
//             // // Handle Errors here.
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             // // The email of the user's account used.
//             // const email = error.email;
//             // // The firebase.auth.AuthCredential type that was used.
//             // const credential = error.credential;
//             // // ...
//         });
//     }

//     handleLogoutButton = () => {
//         // TODO ()=>にするかでthisの違い
//         // firebase.auth().signOut().then(function() {
//         firebase.auth().signOut().then(() => {
//             // Sign-out successful.
//             // this.props.system.updateSnackbarMessage("メニューからログアウトを実行。");
//         }).catch(function (error) {
//             // An error happened.
//         });
//     }

//     updateSnackbarMessage = message => {
//         console.log("updateSnackbarMessage:", message);
//         this.setState({
//             system: {
//                 ...this.state.system,
//                 snackbarMessage: message,
//             }
//         });
//     }

//     handleGetItems = async () => {
//         console.log("getItems:");
//         const items = await getItems();
//         this.setState({
//             items: {
//                 ...this.state.items,
//                 items,
//             }
//         });
//     }

//     openDrawer = () => {
//         this.setState({
//             system: {
//                 ...this.state.system,
//                 drawerOpen: true,
//             }
//         });
//     }

//     closeDrawer = () => {
//         this.setState({
//             system: {
//                 ...this.state.system,
//                 drawerOpen: false,
//             }
//         });
//     }

//     render() {
//         const { classes } = this.props;
//         console.log("layout render props:", this.props);
//         // console.log("layout render state:", this.state);

//         return (
//             <Router>
//                 <ScrollToTop>
//                     <Suspense fallback={<div>Loading...</div>}>
//                         <SystemContext.Provider value={this.state.system}>
//                             <UserContext.Provider value={this.state.user}>
//                                 <SwipeableTemporaryDrawer />
//                                 <MenuAppBar />
//                                 <div className={classes.appBarSpacer} />
//                                 <ItemsContext.Provider value={this.state.items}>
//                                     <Switch>
//                                         {/* <Route exact path="/" component={Main} /> */}
//                                         <Route path="/privacy" component={Privacy} />
//                                         <Route path="/terms" component={Terms} />
//                                         <Route path="/items/:id" component={itemDetail} />
//                                         <Route component={Main} />
//                                     </Switch>
//                                 </ItemsContext.Provider>
//                                 <SimpleSnackBar />
//                             </UserContext.Provider>
//                         </SystemContext.Provider>
//                     </Suspense>
//                 </ScrollToTop>
//             </Router>
//         );
//     }
// }



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
        // closeDrawer: () => this.drawerOpen = false,
    });
    const [snackbar, setSnackbar] = React.useState({
        snackbarMessage: "",
        updateSnackbarMessage: message => setSnackbar(prev => ({ ...prev, snackbarMessage: message })),
    });

    const [items, setItems] = React.useState({
        items: [],
        getItemsAsync: async () => {
            console.log("getItems:");
            const items = await getItems();
            setItems(prev => ({ getItemsAsync: prev.getItemsAsync, items }));
        }
    });
    // async function getItemsAsync() {
    //     console.log("getItems:");
    //     const _items = await getItems();
    //     setItems({ items: _items });
    // }
    useEffect(() => {
        items.getItemsAsync();
    }, []);

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
            {/* <ScrollToTop> */}
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
                                    <Switch>
                                        {/* <Route exact path="/" component={Main} /> */}
                                        <Route path="/privacy" component={Privacy} />
                                        <Route path="/terms" component={Terms} />
                                        <Route path="/items/:id" component={itemDetail} />
                                        <Route component={Main} />
                                    </Switch>
                                </ItemsContext.Provider>
                                <SimpleSnackBar />
                            </UserContext.Provider>
                        </SnackbarContext.Provider>
                    </SystemContext.Provider>
                </Suspense>
            {/* </ScrollToTop> */}
        </Router>
    );
}

// export default withRoot(withStyles(styles)(Layout));
export default withStyles(styles)(Layout);
