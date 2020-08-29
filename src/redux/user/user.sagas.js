import {takeLatest, put, all, call} from "redux-saga/effects";

import userActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentuser
} from "../../firebase/firebase.utils";

import {
  singInSuccess,
  singnInFailure,
  signOutSuccess,
  signOutFailur,
  signUpSuccess,
  sigUpFailure
} from "./user.action";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      singInSuccess({
        id: userSnapshot.id,
        // emailVerified: user.emailVerified,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(singnInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    // console.log(user);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(singnInFailure(error));
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(singnInFailure(error));
  }
}

export function* isUserAutheticated() {
  try {
    const userAuth = yield getCurrentuser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(singnInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailur(error));
  }
}

// export function* signUp({payload: {email, password, displayName}}) {
//   try {
//     const {user} = yield auth.createUserWithEmailAndPassword(email, password);
//     const userRef = yield call(createUserProfileDocument, user, {displayName});
//     const userSnapshot = yield userRef.get();
//     yield put(signUpSuccess({user, additionalData: {displayName}}));
//   } catch (error) {
//     yield put(sigUpFailure(error));
//   }
// }

export function* signUp({payload: {email, password, displayName}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, additionalData: {displayName}}));
  } catch (error) {
    yield put(sigUpFailure(error));
  }
}

export function* signInAfrterSignUp({payload: {user, additionalData}}) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAutheticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfrterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
