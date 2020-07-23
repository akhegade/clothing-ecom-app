import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "your-fash.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "your-fash",
  storageBucket: "your-fash.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

//CREATING USER IN FIRE_BASE FIRE_STORE
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log("userAuth in firebase Utils = ", userAuth);

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//PASSWORD REST METHOD FROM FIRE_BASE
export const forgotPassword = async email => {
  await firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function() {
      alert("Check your email");
    })
    .catch(function(error) {
      // An error happened.
      console.log(error);
    });
};

//EMAIL VERIFICATION METHOD FROM FIRE_BASE AUTHENTICATIOIN
export const verifyEmail = async (auth, userAuth) => {
  var actionCodeSettings = {
    url: "http://localhost:3000/"
    //   iOS: {
    //     bundleId: "com.example.ios"
    //   },
    //   android: {
    //     packageName: "com.example.android",
    //     installApp: true,
    //     minimumVersion: "12"
    //   },
    //   handleCodeInApp: true,
    //   // When multiple custom dynamic link domains are defined, specify which
    //   // one to use.
    //   dynamicLinkDomain: "https://yourfash.page.link/u9DC"
  };

  await auth.currentUser
    .sendEmailVerification(actionCodeSettings)
    .then(function(res) {
      alert("Email sent to " + userAuth.email);
      // console.log(user,res);
    })
    .catch(function(error) {
      alert("alert " + error.message);
      // An error happened.
    });
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
