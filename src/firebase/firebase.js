// import firebase from 'firebase';     // very big
import firebase from 'firebase/app';
import 'firebase/auth';                 // 50KB?
// import 'firebase/firebase-firestore';// 100KB
import 'firebase/firebase-functions';   // 2.46KB
// import 'firebase/messaging';         // a little
// import 'firebase/firebase-storage';  // 10KB?
import config from '../configs/firebase';

// Initialize Firebase
firebase.initializeApp(config);

// // Configure FirebaseUI.
// export const uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'popup',
//     // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//     // signInSuccessUrl: '/signedIn',
//     signInSuccessUrl: '',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//         // firebase.auth.FacebookAuthProvider.PROVIDER_ID
//         // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     ],
//     // my code 
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             console.log("authResult:", authResult);
//             console.log("redirectUrl:", redirectUrl);
//             console.log("this:", this);
//             // return true;
//             return false;
//         },
//         //   uiShown: function() {
//         //     // The widget is rendered.
//         //     // Hide the loader.
//         //     document.getElementById('loader').style.display = 'none';
//         //   }
//     },
// };

export default firebase;