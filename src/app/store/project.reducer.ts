import {on} from "@ngrx/store";
import {createImmerReducer} from 'ngrx-immer/store';
import {initialState} from "./initial-state";
import * as ProjectViewActions from './project.action';
import {checkUserLoggedIn} from "./project.action";


export const mainReducer = createImmerReducer(
  initialState,
  on(ProjectViewActions.checkUserLoggedIn, (state) => {

    return state;
  })
);
