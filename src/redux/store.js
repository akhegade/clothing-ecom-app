import {createStore, applyMiddleware} from "redux";

import {persistStore} from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlerware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlerware));

export const persistor = persistStore(store);

export default {store, persistor};
