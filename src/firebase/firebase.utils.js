import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBFt_tORrQaTDC_GSrcxRmPzphSKumjrok",
  authDomain: "your-fash.firebaseapp.com",
  databaseURL: "https://your-fash.firebaseio.com",
  projectId: "your-fash",
  storageBucket: "your-fash.appspot.com",
  messagingSenderId: "120790033523",
  appId: "1:120790033523:web:3fe2ac663aa7cd3e36b606",
  measurementId: "G-BHPB2Y6DL9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(snapShot);

  if (!snapShot.exitsts) {
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
  // console.log("documents =",firestore.doc("users/:1d234f43345"));
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
