import {createStore, applyMiddleware, compose} from "redux";

import {persistStore} from "redux-persist";

import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import {fetchCollectionsStart} from "./shop/shop.sagas";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlerwares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlerwares.push(logger);
}

export let store;
// export const store = createStore(rootReducer, applyMiddleware(...middlerwares));

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
    //initialState,
    compose(applyMiddleware(...middlerwares), ReactReduxDevTools)
  );
} else {
  store = createStore(
    rootReducer,
    //initialState,
    compose(applyMiddleware(...middlerwares))
  );
}

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};
