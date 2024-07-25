import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromProject from './model'

export const selectState = createFeatureSelector<fromProject.InitialStateType>(
    fromProject.appFeatureKey
);

export const selectToken = createSelector(
    selectState,
    (state: fromProject.InitialStateType) => state.authenticationResponse.token
)

export const selectUserDetails = createSelector(
  selectState,
  (state: fromProject.InitialStateType) => state.authenticationResponse.userInfo
)

export const selectLoaderState = createSelector(
  selectState,
  (state: fromProject.InitialStateType) => state.isLoaderVisible
)

export const selectHttpError = createSelector(
  selectState,
  (state: fromProject.InitialStateType) => state.httpError
)
