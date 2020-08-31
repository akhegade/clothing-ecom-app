import userActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const toggleUserProfile = () => ({
  type: userActionTypes.TOGGLE_USER_PROFILE
});

//actions for google sign in
export const googleSingInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

// actions for Email authentication
export const emailSingInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const singInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const singnInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

//checking for user session
export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

//sing out actions
export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailur = error => ({
  type: userActionTypes.SIGN_OUT_START,
  paylod: error
});

export const signUpStart = userCredentials => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});

export const sigUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  paylod: error
});
