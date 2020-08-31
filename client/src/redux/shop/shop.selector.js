import {createSelector} from "reselect";

import memoize from "lodash.memoize";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
export const selectErrorMessage = createSelector(
  [selectShop],
  shop => shop.errorMessage
);

export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectCollectionPrivew = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
