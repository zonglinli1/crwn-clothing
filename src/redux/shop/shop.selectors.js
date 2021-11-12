import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = memoize(createSelector(
    [selectShop],
    shop => shop.collections
));
export const selectCollectionsForPreview = memoize(createSelector(
    [selectCollections],
    collecions => Object.keys(collecions).map(key => collecions[key])
));

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
));