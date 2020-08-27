import {createStore, applyMiddleware, compose} from "redux";

import {persistStore} from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlerware = [thunk];

if (process.env.NODE_ENV === "development") {
  middlerware.push(logger);
}

export let store;
// export const store = createStore(rootReducer, applyMiddleware(...middlerware));

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
    //initialState,
    compose(applyMiddleware(...middlerware), ReactReduxDevTools)
  );
} else {
  store = createStore(
    rootReducer,
    //initialState,
    compose(applyMiddleware(...middlerware))
  );
}

export const persistor = persistStore(store);

export default {store, persistor};
