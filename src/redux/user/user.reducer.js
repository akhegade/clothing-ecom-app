import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  showUserProfile: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case userActionTypes.TOGGLE_USER_PROFILE:
      return {
        ...state,
        showUserProfile: !state.showUserProfile
      };
    default:
      return state;
  }
};

export default userReducer;
