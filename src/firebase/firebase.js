// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firebase-database';
// import 'firebase/firebase-firestore';
// import 'firebase/firebase-functions';
// import 'firebase/messaging';
// import 'firebase/firebase-storage';
import config from '../configs/firebase';

// Initialize Firebase
firebase.initializeApp(config);

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    // signInSuccessUrl: '/signedIn',
    signInSuccessUrl: '',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    // my code 
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            console.log("★★ authResult:", authResult);
            console.log("★★ redirectUrl", redirectUrl);
            console.log("★★ this", this);
            // return true;
            return false;
        },
        //   uiShown: function() {
        //     // The widget is rendered.
        //     // Hide the loader.
        //     document.getElementById('loader').style.display = 'none';
        //   }
    },
};

export default firebase;