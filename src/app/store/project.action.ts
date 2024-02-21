import {createAction, props} from "@ngrx/store";
import {UserDetails} from "./model";

export const checkUserLoggedIn = createAction(
  "[Splash Component] CheckUserLoggedIn"
);

export const setUserInfo = createAction(
  "[Login Component] SetUserInfo",
  props<{ userDetails: UserDetails }>()
);


export const LOGOUT = createAction(
  "LOGOUT",
);
