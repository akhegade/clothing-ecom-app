import {
  // takeEvery is listens for every actions of specific type we pass
  takeEvery,
  // takeLatest is listens for lastest actions insted of every action, of specific type we pass
  takeLatest,
  // call is effect in saga which take mehtod and parameter to methos as arguments
  call,
  // put is exactly same as dispatch but it yielded
  put,
  all
} from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils";
import {fetchCollectionsSuccess, fetchCollectionsFailur} from "./shop.action";

import shopActionTypes from "./shop.types";

export function* fectCollectionsAsync() {
  // yield console.log("i am fired");

  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    console.log("snapshot :", snapshot);

    const collectionsMap = yield call(
      convertCollectionsSnapShotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailur(error.message));
  }

  // dispatch(fetchCollectionsStart());
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(error => fetchCollectionsFailur(error.message));
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fectCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
