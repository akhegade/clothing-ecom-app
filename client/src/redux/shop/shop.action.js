import shopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils.js";

export const setShopCollections = collections => ({
  type: shopActionTypes.SET_SHOP_DATA,
  payload: collections
});

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailur = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILUR,
  payload: errorMessage
});

//this is using thunk library handling async calls
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => fetchCollectionsFailur(error.message));
  };
};
