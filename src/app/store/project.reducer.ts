import {on} from "@ngrx/store";
import {createImmerReducer} from 'ngrx-immer/store';
import {initialState} from "./initial-state";
import * as ProjectViewActions from './project.action';


export const mainReducer = createImmerReducer(
  initialState,
  on(ProjectViewActions.checkUserLoggedIn, (state) => {

    return state;
  }), on(ProjectViewActions.setUserInfo, (state, {userDetails}) => {
    state.userDetails = userDetails;
    return state;
  }),
);
