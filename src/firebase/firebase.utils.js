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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
