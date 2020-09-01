import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBFt_tORrQaTDC_GSrcxRmPzphSKumjrok",
  authDomain: "your-fash.firebaseapp.com",
  databaseURL: "https://your-fash.firebaseio.com",
  //process.env.REACT_APP_DATABASE_URL,
  projectId: "your-fash",
  storageBucket: "your-fash.appspot.com",
  messagingSenderId: "120790033523",
  appId: "1:120790033523:web:3fe2ac663aa7cd3e36b606",
  measurementId: "G-BHPB2Y6DL9"
};

firebase.initializeApp(firebaseConfig);

//CREATING USER IN FIRE_BASE FIRE_STORE
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`users/${userAuth.uid}`);
  // console.log("userRef in firebase utils", userRef);

  const snapShot = await userRef.get();
  // console.log("snapShot", snapShot.data());

  // const collectionRef = await firestore.collection("users");
  // console.log("collectionFirebase:", collectionRef);
  // const collectionSnapShot = await collectionRef.get();
  // console.log(
  //   "collectionSnapShot:",
  //   collectionSnapShot.docs.map(doc => doc.data())
  // );

  if (!snapShot.exists) {
    const {displayName, emailVerified, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        emailVerified,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//for adding collection and documents to firestroe
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionRef", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log("newDocRef", newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapShotToMap = collections => {
  const transformedColleciton = collections.docs.map(doc => {
    const {title} = doc.data();
    // console.log("title: ", title);

    return {
      id: doc.id,
      ...doc.data(),
      routeName: encodeURI(title.toLowerCase())
    };
  });

  // console.log("transformedColleciton", transformedColleciton);
  return transformedColleciton.reduce((accumulator, collection) => {
    accumulator[collection.routeName] = collection;
    return accumulator;
  }, {});
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

export const getCurrentuser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
