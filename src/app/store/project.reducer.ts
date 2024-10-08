import {on} from "@ngrx/store";
import {createImmerReducer} from 'ngrx-immer/store';
import {initialState} from "./initial-state";
import * as ProjectViewActions from './project.action';


export const mainReducer = createImmerReducer(
  initialState,
  on(ProjectViewActions.checkUserLoggedIn, (state) => {
    return state;
  }),
  on(ProjectViewActions.setAuthenticationResponse, (state, {authenticationResponse}) => {
    state.authenticationResponse = authenticationResponse;
    return state;
  }),
  on(ProjectViewActions.setLoaderVisible, (state, {isLoaderVisible}) => {
    state.isLoaderVisible = isLoaderVisible;
    return state;
  }),
  on(ProjectViewActions.setHttpError, (state, {httpError}) => {
    state.httpError = httpError;
    return state;
  })
);
