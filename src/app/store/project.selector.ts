import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromProject from './model'

export const selectState = createFeatureSelector<fromProject.InitialStateType>(
    fromProject.appFeatureKey
);

export const selectToken = createSelector(
    selectState,
    (state: fromProject.InitialStateType) => state.userDetails.token
)

export const selectUserDetails = createSelector(
  selectState,
  (state: fromProject.InitialStateType) => state.userDetails
)

export const selectShops = createSelector(
  selectState,
  (state: fromProject.InitialStateType) => state.shops
)
