import sections from "./sections.data";

const INITIAL_STATE = {
  sections: sections
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
};

export default directoryReducer;
